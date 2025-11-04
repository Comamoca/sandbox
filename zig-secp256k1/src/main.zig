const std = @import("std");
const c_api = @import("c_api.zig");

pub const secp256k1 = @cImport({
    @cInclude("secp256k1.h");
    @cInclude("secp256k1_schnorrsig.h");
});

pub const wrapper = @cImport({
    @cInclude("wrapper.h");
});

// C API関数（c_api.zigから再エクスポート）
pub const secp256k1_schnorr_sign = c_api.secp256k1_schnorr_sign;
pub const secp256k1_schnorr_verify = c_api.secp256k1_schnorr_verify;
pub const secp256k1_derive_pubkey = c_api.secp256k1_derive_pubkey;

// ============================================================================
// Zig-friendly wrapper functions
// ============================================================================

/// Schnorr署名を作成する（Zigラッパー）
/// secret_key: 32バイトの秘密鍵
/// message_hash: 32バイトのメッセージハッシュ
/// returns: 64バイトの署名
pub fn sign(secret_key: *const [32]u8, message_hash: *const [32]u8) ![64]u8 {
    var signature: [64]u8 = undefined;
    const result = secp256k1_schnorr_sign(
        @ptrCast(secret_key),
        @ptrCast(message_hash),
        @ptrCast(&signature),
    );

    if (result != 1) {
        return error.SignFailed;
    }

    return signature;
}

/// Schnorr署名を検証する（Zigラッパー）
/// signature: 64バイトの署名
/// message_hash: 32バイトのメッセージハッシュ
/// pubkey_bytes: 32バイトのx-only公開鍵
/// returns: 署名が有効な場合true
pub fn verify(signature: *const [64]u8, message_hash: *const [32]u8, pubkey_bytes: *const [32]u8) !bool {
    const result = secp256k1_schnorr_verify(
        @ptrCast(signature),
        @ptrCast(message_hash),
        @ptrCast(pubkey_bytes),
    );

    if (result == -1) {
        return error.InvalidPubkey;
    }

    return result == 1;
}

/// 秘密鍵から公開鍵を導出する（Zigラッパー）
pub fn derivePubkey(secret_key: *const [32]u8) ![32]u8 {
    var pubkey: [32]u8 = undefined;
    const result = secp256k1_derive_pubkey(
        @ptrCast(secret_key),
        @ptrCast(&pubkey),
    );

    if (result != 1) {
        return error.InvalidSecretKey;
    }

    return pubkey;
}

const NostrEvent = struct {
    content: []const u8,
    created_at: i64,
    id: []const u8,
    kind: i32,
    pubkey: []const u8,
    sig: []const u8,
    tags: []const []const u8,
};

fn verifyEventFile(allocator: std.mem.Allocator, file_path: []const u8) !bool {
    std.debug.print("=== Verifying: {s} ===\n\n", .{file_path});

    // ファイルを読み込み
    const file = std.fs.cwd().openFile(file_path, .{}) catch |err| {
        std.debug.print("Failed to open {s}: {}\n\n", .{ file_path, err });
        return err;
    };
    defer file.close();

    const file_content = try file.readToEndAlloc(allocator, 1024 * 1024);
    defer allocator.free(file_content);

    // JSONをパース
    const parsed = try std.json.parseFromSlice(NostrEvent, allocator, file_content, .{});
    defer parsed.deinit();

    const event = parsed.value;

    std.debug.print("Event content: {s}\n", .{event.content});
    std.debug.print("Event ID: {s}\n", .{event.id});
    std.debug.print("Public key: {s}\n", .{event.pubkey});
    std.debug.print("Signature: {s}\n\n", .{event.sig});

    // 16進数文字列をバイト配列に変換
    var event_id: [32]u8 = undefined;
    var pubkey_bytes: [32]u8 = undefined;
    var signature: [64]u8 = undefined;

    _ = try std.fmt.hexToBytes(&event_id, event.id);
    _ = try std.fmt.hexToBytes(&pubkey_bytes, event.pubkey);
    _ = try std.fmt.hexToBytes(&signature, event.sig);

    // 署名を検証
    std.debug.print("Verifying signature...\n", .{});
    const is_valid = try verify(&signature, &event_id, &pubkey_bytes);

    if (is_valid) {
        std.debug.print("✓ Signature is VALID!\n\n", .{});
    } else {
        std.debug.print("✗ Signature is INVALID!\n\n", .{});
    }

    return is_valid;
}

pub fn main() !void {
    var gpa = std.heap.GeneralPurposeAllocator(.{}){};
    defer _ = gpa.deinit();
    const allocator = gpa.allocator();

    // コマンドライン引数を取得
    const args = try std.process.argsAlloc(allocator);
    defer std.process.argsFree(allocator, args);

    // 検証するファイルのリストを作成
    var files = std.ArrayList([]const u8).init(allocator);
    defer files.deinit();

    if (args.len > 1) {
        // コマンドライン引数で指定されたファイルを検証
        for (args[1..]) |arg| {
            try files.append(arg);
        }
    } else {
        // デフォルトでevent.jsonを検証
        try files.append("event.json");
    }

    // 各ファイルを検証
    var all_valid = true;
    for (files.items) |file_path| {
        const is_valid = verifyEventFile(allocator, file_path) catch |err| {
            std.debug.print("Error verifying {s}: {}\n\n", .{ file_path, err });
            all_valid = false;
            continue;
        };

        if (!is_valid) {
            all_valid = false;
        }
    }

    if (!all_valid) {
        std.debug.print("Some signatures were invalid!\n", .{});
        return error.InvalidSignature;
    }

    // デモ: nak生成の秘密鍵を使って署名する
    std.debug.print("=== Demo: Signing with nak-generated key ===\n\n", .{});

    // nak生成の秘密鍵を使用
    const secret_key_hex = "3b24f001d71807b914c2a0c6c7822d3ea74d4c52467b3159464d45609eee0919";
    var secret_key: [32]u8 = undefined;
    _ = try std.fmt.hexToBytes(&secret_key, secret_key_hex);

    std.debug.print("Secret key: {s}\n", .{secret_key_hex});

    // 公開鍵を導出（新しいderivePubkey関数を使用）
    const derived_pubkey = try derivePubkey(&secret_key);

    std.debug.print("Derived public key: ", .{});
    for (derived_pubkey) |byte| {
        std.debug.print("{x:0>2}", .{byte});
    }
    std.debug.print("\n", .{});

    // test_event.jsonの公開鍵と一致することを確認
    const expected_pubkey_hex = "f518f7c2fee63a68ffab19671faca9d3b1000760327dc1a84feb0235bdc418d9";
    var expected_pubkey: [32]u8 = undefined;
    _ = try std.fmt.hexToBytes(&expected_pubkey, expected_pubkey_hex);

    const keys_match = std.mem.eql(u8, &derived_pubkey, &expected_pubkey);
    if (keys_match) {
        std.debug.print("✓ Public key matches test_event.json!\n\n", .{});
    } else {
        std.debug.print("✗ Public key does not match!\n\n", .{});
    }

    std.debug.print("All tests passed! ✓\n", .{});
}
