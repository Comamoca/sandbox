{
  description = "A basic flake to with flake-parts";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs?ref=nixpkgs-unstable";
    treefmt-nix.url = "github:numtide/treefmt-nix";
    flake-parts.url = "github:hercules-ci/flake-parts";
    systems.url = "github:nix-systems/default";
    haxe-support.url = "github:comamoca/nix-haxe-support";
  };

  outputs =
    inputs@{
      self,
      systems,
      nixpkgs,
      treefmt-nix,
      flake-parts,
      haxe-support,
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

	  deps = pkgs.callPackage ./deps.nix { inherit haxe-support; };

          executable = stdenv.mkDerivation rec {
            pname = "hello";
            version = "0.1.0";
            src = ./.;

	    nativeBuildInputs = with pkgs.haxePackages; [
	      deps.hxcpp
	    ];

	    buildInputs = with pkgs; [
	      haxe
	    ];

            buildPhase = ''
	      haxe build.hxml
	    '';

            installPhase = ''
	      install -D ./out/Main $out/bin/${pname}
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
	      haxe
	      deps.hxcpp

              nil
            ];
          };

          packages.default = executable;
        };
    };
}
