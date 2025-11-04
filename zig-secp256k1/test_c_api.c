#include <stdio.h>
#include <string.h>
#include <stdint.h>

// Zigからエクスポートされた関数の宣言
extern int secp256k1_schnorr_sign(const uint8_t *secret_key, const uint8_t *message_hash, uint8_t *signature_out);
extern int secp256k1_schnorr_verify(const uint8_t *signature, const uint8_t *message_hash, const uint8_t *pubkey);
extern int secp256k1_derive_pubkey(const uint8_t *secret_key, uint8_t *pubkey_out);

// ヘルパー関数: 16進数文字列をバイト配列に変換
int hex_to_bytes(const char *hex, uint8_t *bytes, size_t len) {
    for (size_t i = 0; i < len; i++) {
        if (sscanf(hex + 2*i, "%2hhx", &bytes[i]) != 1) {
            return -1;
        }
    }
    return 0;
}

// ヘルパー関数: バイト配列を16進数で表示
void print_hex(const char *label, const uint8_t *data, size_t len) {
    printf("%s: ", label);
    for (size_t i = 0; i < len; i++) {
        printf("%02x", data[i]);
    }
    printf("\n");
}

int main() {
    printf("=== C API Test for Zig secp256k1 ===\n\n");

    // テストデータ
    const char *secret_key_hex = "3b24f001d71807b914c2a0c6c7822d3ea74d4c52467b3159464d45609eee0919";
    const char *message_hex = "0000000000000000000000000000000000000000000000000000000000000000";

    uint8_t secret_key[32];
    uint8_t message_hash[32];
    uint8_t pubkey[32];
    uint8_t signature[64];

    // 16進数文字列をバイトに変換
    if (hex_to_bytes(secret_key_hex, secret_key, 32) != 0) {
        fprintf(stderr, "Failed to parse secret key\n");
        return 1;
    }
    if (hex_to_bytes(message_hex, message_hash, 32) != 0) {
        fprintf(stderr, "Failed to parse message hash\n");
        return 1;
    }

    // 1. 公開鍵を導出
    printf("1. Deriving public key...\n");
    int derive_result = secp256k1_derive_pubkey(secret_key, pubkey);
    if (derive_result != 1) {
        fprintf(stderr, "Failed to derive public key\n");
        return 1;
    }
    print_hex("   Public key", pubkey, 32);
    printf("   ✓ Success\n\n");

    // 2. 署名を作成
    printf("2. Creating signature...\n");
    int sign_result = secp256k1_schnorr_sign(secret_key, message_hash, signature);
    if (sign_result != 1) {
        fprintf(stderr, "Failed to create signature\n");
        return 1;
    }
    print_hex("   Signature", signature, 64);
    printf("   ✓ Success\n\n");

    // 3. 署名を検証
    printf("3. Verifying signature...\n");
    int verify_result = secp256k1_schnorr_verify(signature, message_hash, pubkey);
    if (verify_result == 1) {
        printf("   ✓ Signature is VALID!\n\n");
    } else if (verify_result == 0) {
        printf("   ✗ Signature is INVALID!\n\n");
        return 1;
    } else {
        fprintf(stderr, "   Error during verification\n");
        return 1;
    }

    // 4. 既知の署名を検証（test_event.jsonから）
    printf("4. Verifying known signature from test_event.json...\n");
    const char *known_sig_hex = "f2b65ccd514634f0430a038c48ae0fdc1679ee869a1abd956e9e756b0b95302f0f35a637641d3bb1a23744ea409f1dafdb1c0e52ff36ea00cf9307c8aab8f1e2";
    const char *known_hash_hex = "bdf20626bb028d7e1897bcff7211a86639e7c314e1bb608565236e2b1f1a9d02";
    const char *known_pubkey_hex = "f518f7c2fee63a68ffab19671faca9d3b1000760327dc1a84feb0235bdc418d9";

    uint8_t known_sig[64];
    uint8_t known_hash[32];
    uint8_t known_pubkey[32];

    hex_to_bytes(known_sig_hex, known_sig, 64);
    hex_to_bytes(known_hash_hex, known_hash, 32);
    hex_to_bytes(known_pubkey_hex, known_pubkey, 32);

    int known_verify = secp256k1_schnorr_verify(known_sig, known_hash, known_pubkey);
    if (known_verify == 1) {
        printf("   ✓ Known signature is VALID!\n\n");
    } else {
        printf("   ✗ Known signature verification failed!\n\n");
        return 1;
    }

    printf("All C API tests passed! ✓\n");
    return 0;
}
