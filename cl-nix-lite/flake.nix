{
  description = "Demo lispPackagesLite app using flakes";
  inputs = {
    cl-nix-lite.url = "github:hraban/cl-nix-lite";
    treefmt-nix.url = "github:numtide/treefmt-nix";
    flake-parts.url = "github:hercules-ci/flake-parts";
    systems.url = "github:nix-systems/default";
  };
  outputs =
    inputs@{
      self,
      nixpkgs,
      cl-nix-lite,
      flake-utils,
      flake-parts,
      treefmt-nix,
      systems,
    }:
    flake-parts.lib.mkFlake { inherit inputs; } {
      imports = [ treefmt-nix.flakeModule ];
      systems = import inputs.systems;

      perSystem =
        {
          config,
          pkgs,
          system,
          ...
        }:
        let
          pkgs = nixpkgs.legacyPackages.${system}.extend cl-nix-lite.overlays.default;
          stdenv = pkgs.stdenv;
          app =
            with pkgs.lispPackagesLite;
            lispDerivation {
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
        in
        rec {
          treefmt = {
            projectRootFile = "flake.nix";
            programs = {
              nixfmt.enable = true;
            };

            settings.formatter = { };
          };

          packages.default = app;
        };
    };
}
