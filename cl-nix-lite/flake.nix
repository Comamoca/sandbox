{
  description = "Demo lispPackagesLite app using flakes";
  inputs = { cl-nix-lite.url = "github:hraban/cl-nix-lite"; };
  outputs = { self, nixpkgs, cl-nix-lite, flake-utils }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs =
          nixpkgs.legacyPackages.${system}.extend cl-nix-lite.overlays.default;
        stdenv = pkgs.stdenv;

        test = { };

        app = with pkgs.lispPackagesLite;
          lispDerivation {
            name = "hello";
            lispSystem = "hello";
            lispDependencies = [ alexandria arrow-macros rove ];
            src = pkgs.lib.cleanSource ./.;
            dontStrip = true;

            installPhase = ''
              install -D src/hello $out/bin/hello
            '';
          };
      in {
        checks = { inherit test; };

        packages = { default = app; };
      });
}
