#  Copyright (c) 2003-2024 Eelco Dolstra and the Nixpkgs/NixOS contributors
#
#  Permission is hereby granted, free of charge, to any person obtaining
#  a copy of this software and associated documentation files (the
#  "Software"), to deal in the Software without restriction, including
#  without limitation the rights to use, copy, modify, merge, publish,
#  distribute, sublicense, and/or sell copies of the Software, and to
#  permit persons to whom the Software is furnished to do so, subject to
#  the following conditions:
#
#  The above copyright notice and this permission notice shall be
#  included in all copies or substantial portions of the Software.
#
#  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
#  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
#  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
#  NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
#  LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
#  OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
#  WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

{ pkgs, haxe-support }:
let
  lib = pkgs.lib;

  withCommas = lib.replaceStrings [ "." ] [ "," ];
  stdenv = pkgs.stdenv;

  # local-lib = pkgs.callPackage ./lib.nix { inherit pkgs; };
  # buildHaxeLib = local-lib.buildHaxeLib;
  buildHaxeLib = haxe-support.buildHaxeLib;
in {
  # inherit local-lib;

  hxcpp = buildHaxeLib rec {
    libname = "hxcpp";
    version = "4.3.2";
    sha256 = "sha256-mm0JObjNgi9JSLRv7IUAZeMUFV2f8+7OG8FhRWtNlqQ=";
    postFixup = ''
      for f in $out/lib/haxe/${withCommas libname}/${withCommas version}/{,project/libs/nekoapi/}bin/Linux{,64}/*; do
        chmod +w "$f"
        patchelf --set-interpreter $(cat $NIX_CC/nix-support/dynamic-linker)   "$f" || true
        patchelf --set-rpath ${ lib.makeLibraryPath [ stdenv.cc.cc ] }  "$f" || true
      done
    '';
    meta.description = "Runtime support library for the Haxe C++ backend";
  };
}
