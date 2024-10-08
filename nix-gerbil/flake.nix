{
  description = "A basic flake to with flake-parts";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs?ref=nixpkgs-unstable";
    treefmt-nix.url = "github:numtide/treefmt-nix";
    flake-parts.url = "github:hercules-ci/flake-parts";
    systems.url = "github:nix-systems/default";
  };

  outputs =
    inputs@{
      self,
      systems,
      nixpkgs,
      treefmt-nix,
      flake-parts,
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
          stdenv = pkgs.stdenv;

	  gerbil-utils = pkgs.fetchFromGitHub {
	    owner = "mighty-gerbils";
	    repo = "gerbil-utils";
	    rev = "4163c58663b7a85d6512723892e4e3a568df9def";
	    hash = "sha256-PZAonRNz2FmaV/SwHHcx/EJFB6hf02id7Ddk+YCUaFg=";
	  };

          hello = stdenv.mkDerivation {
            pname = "hello";
            version = "0.1.0";
	    src = ./.;

	    buildInputs = with pkgs; [
	      gerbil
	    ];

            buildPhase = ''
	      export HOME="$(mktemp -d)"

	      ./build.ss
            '';

	    installPhase = ''
	      mkdir -p $out/bin
              install -D $src/bin/hello $out/bin/hello

	      # mkdir -p $out/pkgs/github.com

	      # cp -r ${gerbil-utils} $out/pkgs/github.com/gerbil-utils
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

          devShells.default = pkgs.mkShell {
            packages = with pkgs; [
              nil
            ];
          };

          packages.default = hello;
        };
    };
}
