const std = @import("std");
const c_api = @import("c_api.zig");

pub const secp256k1 = @cImport({
    @cInclude("secp256k1.h");
    @cInclude("secp256k1_schnorrsig.h");
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

test "basic functionality" {
    const testing = std.testing;

    // 簡単なテスト用の秘密鍵
    const secret_key = [_]u8{0x01} ** 32;

    // 公開鍵の導出をテスト
    const pubkey = try derivePubkey(&secret_key);
    try testing.expect(pubkey.len == 32);
}
