{
  description = "Demo lispPackagesLite app using flakes";
  inputs = {
    cl-nix-lite.url = "github:hraban/cl-nix-lite";
  };
  outputs = {
    self, nixpkgs, cl-nix-lite, flake-utils
  }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = nixpkgs.legacyPackages.${system}.extend cl-nix-lite.overlays.default;
      in
        {
	  checks = {
            test = with pkgs.lispPackagesLite; lispDerivation {
              name = "hello-test";
              lispSystem = "hello-test";
              lispDependencies = [
                alexandria
                arrow-macros
              ];
              src = pkgs.lib.cleanSource ./.;
              dontStrip = true;
            };
	  };

          packages = {
            default = with pkgs.lispPackagesLite; lispDerivation {
              name = "hello";
              lispSystem = "hello";
              lispDependencies = [
                alexandria
                arrow-macros
                rove
              ];
              src = pkgs.lib.cleanSource ./.;
              dontStrip = true;

              installPhase = ''
              install -D src/hello $out/bin/hello
              '';
            };
          };
        });
  }
