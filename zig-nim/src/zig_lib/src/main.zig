const std = @import("std");
const crypto = std.crypto;

export fn add(a: i32, b: i32) i32 {
    return a + b;
}

export fn print(text: [*:0]const u8) void {
    std.debug.print("{s}", .{text});
}

// export fn getpubkey(pair: crypto.sign.ecdsa.EcdsaP256Sha256.KeyPair) [33]u8 {
//     const public = pair.public_key;
//     return public.toCompressedSec1();
// }

export fn getseckey() *const [32] u8 {
    const pair = crypto.sign.ecdsa.EcdsaP256Sha256.KeyPair.create(null) catch unreachable;

    const secret = pair.secret_key;
    return &secret.toBytes();
}

// export fn sign(messeage: []u8) [64]u8 {
//     const pair = try crypto.sign.Ed25519.KeyPair.create(null);
//
//     const sig: [64]u8 = try crypto.sign.Ed25519.sign(messeage, pair, null);
//     return sig;
// }

// export fn verify(pub_key: crypto.sign.Ed25519.PublicKey, sig: [64]u8, messeage: []const u8) !void {
//     try crypto.sign.Ed25519.Verifier.verify(sig, messeage, pub_key);
// }

// pub fn main() !void {
//     const pair = try crypto.sign.Ed25519.KeyPair.create(null);
//     const msg = "Hello!";
//
//     const sig = try sign(pair, msg);
//     verify(pair.public_key, sig, msg);
// }
