const std = @import("std");
const secp256k1 = @cImport({
    @cInclude("secp256k1.h");
    @cInclude("secp256k1_schnorrsig.h");
});

// ============================================================================
// Core Functions - C ABI compatible for external use
// ============================================================================

/// Schnorr署名を作成する（C ABI互換）
/// @param secret_key 32バイトの秘密鍵へのポインタ
/// @param message_hash 32バイトのメッセージハッシュへのポインタ
/// @param signature_out 64バイトの署名を書き込むバッファへのポインタ
/// @return 成功時1、失敗時0
pub export fn secp256k1_schnorr_sign(
    secret_key: [*c]const u8,
    message_hash: [*c]const u8,
    signature_out: [*c]u8,
) c_int {
    const ctx = secp256k1.secp256k1_context_create(secp256k1.SECP256K1_CONTEXT_NONE);
    defer secp256k1.secp256k1_context_destroy(ctx);

    // 鍵ペアを作成
    var keypair: secp256k1.secp256k1_keypair = undefined;
    const keypair_result = secp256k1.secp256k1_keypair_create(ctx, &keypair, secret_key);
    if (keypair_result != 1) {
        return 0;
    }

    // 署名を作成
    const sign_result = secp256k1.secp256k1_schnorrsig_sign32(ctx, signature_out, message_hash, &keypair, null);
    if (sign_result != 1) {
        return 0;
    }

    return 1;
}

/// Schnorr署名を検証する（C ABI互換）
/// @param signature 64バイトの署名へのポインタ
/// @param message_hash 32バイトのメッセージハッシュへのポインタ
/// @param pubkey 32バイトのx-only公開鍵へのポインタ
/// @return 署名が有効な場合1、無効な場合0、エラー時-1
pub export fn secp256k1_schnorr_verify(
    signature: [*c]const u8,
    message_hash: [*c]const u8,
    pubkey: [*c]const u8,
) c_int {
    const ctx = secp256k1.secp256k1_context_create(secp256k1.SECP256K1_CONTEXT_NONE);
    defer secp256k1.secp256k1_context_destroy(ctx);

    // x-only公開鍵をパース
    var xonly_pubkey: secp256k1.secp256k1_xonly_pubkey = undefined;
    const parse_result = secp256k1.secp256k1_xonly_pubkey_parse(ctx, &xonly_pubkey, pubkey);
    if (parse_result != 1) {
        return -1;
    }

    // 署名を検証
    const is_valid = secp256k1.secp256k1_schnorrsig_verify(ctx, signature, message_hash, 32, &xonly_pubkey);
    return if (is_valid == 1) @as(c_int, 1) else @as(c_int, 0);
}

/// 秘密鍵から公開鍵を導出する（C ABI互換）
/// @param secret_key 32バイトの秘密鍵へのポインタ
/// @param pubkey_out 32バイトの公開鍵を書き込むバッファへのポインタ
/// @return 成功時1、失敗時0
pub export fn secp256k1_derive_pubkey(
    secret_key: [*c]const u8,
    pubkey_out: [*c]u8,
) c_int {
    const ctx = secp256k1.secp256k1_context_create(secp256k1.SECP256K1_CONTEXT_NONE);
    defer secp256k1.secp256k1_context_destroy(ctx);

    // 鍵ペアを作成
    var keypair: secp256k1.secp256k1_keypair = undefined;
    const keypair_result = secp256k1.secp256k1_keypair_create(ctx, &keypair, secret_key);
    if (keypair_result != 1) {
        return 0;
    }

    // x-only公開鍵を取得
    var xonly_pubkey: secp256k1.secp256k1_xonly_pubkey = undefined;
    _ = secp256k1.secp256k1_keypair_xonly_pub(ctx, &xonly_pubkey, null, &keypair);

    // 公開鍵をシリアライズ
    _ = secp256k1.secp256k1_xonly_pubkey_serialize(ctx, pubkey_out, &xonly_pubkey);

    return 1;
}
