{
  description = "A basic flake to with flake-parts";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs?ref=nixpkgs-unstable";
    treefmt-nix.url = "github:numtide/treefmt-nix";
    flake-parts.url = "github:hercules-ci/flake-parts";
    systems.url = "github:nix-systems/default";
    git-hooks-nix.url = "github:cachix/git-hooks.nix";
    devenv.url = "github:cachix/devenv";
  };

  outputs =
    inputs@{
      self,
      systems,
      nixpkgs,
      flake-parts,
      devenv,
      ...
    }:
    flake-parts.lib.mkFlake { inherit inputs; } {
      imports = [
        inputs.treefmt-nix.flakeModule
        inputs.git-hooks-nix.flakeModule
        inputs.devenv.flakeModule
      ];
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

          # To make executable binary.
          executable = stdenv.mkDerivation {
            # Set executable binary name.
            pname = "executable";
            version = "0.0.1";
            # Specify source path. You must specify the file added with `git add`.
            src = ./.;

            # Write build commands. e.g. make, gcc, etc...
            buildPhase = '''';

            # Write build commands. e.g. install file $out/bin/file
            installPhase = '''';
          };

          # When execute `nix run`, print "Hello World!".
          # And execute `nix build` to make execute at `./result/bin/hello`.
          hello = stdenv.mkDerivation {
            pname = "hello";
            version = "0.1.0";
            src = pkgs.writeShellScriptBin "hello" ''
              echo Hello World!
            '';

            buildCommand = ''
              install -D $src/bin/hello $out/bin/hello
            '';
          };

          git-secrets' = pkgs.writeShellApplication {
            name = "git-secrets";
            runtimeInputs = [ pkgs.git-secrets ];
            text = ''
              git secrets --scan
            '';
          };
        in
        {
          # When execute `nix fmt`, formatting your code.
          treefmt = {
            projectRootFile = "flake.nix";
            programs = {
              nixfmt.enable = true;
            };

            settings.formatter = { };
          };

          pre-commit = {
            check.enable = true;
            settings = {
              hooks = {
                treefmt.enable = true;
                ripsecrets.enable = true;
                git-secrets = {
                  enable = true;
                  name = "git-secrets";
                  entry = "${git-secrets'}/bin/git-secrets";
                  language = "system";
                  types = [ "text" ];
                };
              };
            };
          };

          packages.default = hello;
        };
    };
}
