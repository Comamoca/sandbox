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

{ pkgs }:
let
  lib = pkgs.lib;
  stdenv = pkgs.stdenv;
  withCommas = lib.replaceStrings [ "." ] [ "," ];
  fetchzip = pkgs.fetchzip;
  installLibHaxe = { libname, version, files ? "*" }: ''
    mkdir -p "$out/lib/haxe/${withCommas libname}/${withCommas version}"
    echo -n "${version}" > $out/lib/haxe/${withCommas libname}/.current
    cp -dpR ${files} "$out/lib/haxe/${withCommas libname}/${withCommas version}/"
  '';
in
with pkgs; {
  inherit installLibHaxe;

  buildHaxeLib =
    { libname
    , version
    , sha256
    , meta
    , ...
    } @ attrs:
    stdenv.mkDerivation (attrs // {
      name = "${libname}-${version}";

      buildInputs = (attrs.buildInputs or [ ]) ++ [ haxe neko ]; # for setup-hook.sh to work
      src = fetchzip rec {
        name = "${libname}-${version}";
        url = "http://lib.haxe.org/files/3.0/${withCommas name}.zip";
        inherit sha256;
        stripRoot = false;
      };

      installPhase = attrs.installPhase or ''
        runHook preInstall
        (
          if [ $(ls $src | wc -l) == 1 ]; then
            cd $src/* || cd $src
          else
            cd $src
          fi
          ${installLibHaxe { inherit libname version; }}
        )
        runHook postInstall
      '';

      meta = {
        homepage = "http://lib.haxe.org/p/${libname}";
        license = lib.licenses.bsd2;
        platforms = lib.platforms.all;
        description = throw "please write meta.description";
      } // attrs.meta;
    });
}
