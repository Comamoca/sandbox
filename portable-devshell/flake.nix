{
  description = "A basic flake to with flake-parts";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs?ref=nixpkgs-unstable";
    treefmt-nix.url = "github:numtide/treefmt-nix";
    flake-parts.url = "github:hercules-ci/flake-parts";
    systems.url = "github:nix-systems/default";
    git-hooks-nix.url = "github:cachix/git-hooks.nix";
    process-compose-flake.url = "github:Platonic-Systems/process-compose-flake";
    services-flake.url = "github:juspay/services-flake";
    devshell.url = "github:numtide/devshell";
  };

  outputs =
    inputs@{
      self,
      systems,
      nixpkgs,
      flake-parts,
      ...
    }:
    flake-parts.lib.mkFlake { inherit inputs; } {
      imports = [
        inputs.treefmt-nix.flakeModule
        inputs.git-hooks-nix.flakeModule
        inputs.process-compose-flake.flakeModule
        inputs.devshell.flakeModule
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

          app = stdenv.mkDerivation {
            pname = "hello";
            version = "0.1.0";
            src = pkgs.writeShellScriptBin "hello" ''
              echo Hello World!
            '';

            buildCommand = ''
              install -D $src/bin/hello $out/bin/hello
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
                gitleaks = {
                  enable = true;
                  entry = "${pkgs.gitleaks}/bin/gitleaks protect --staged";
                  language = "system";
                };
              };
            };
          };

          # To start the service, please run: nix run .#default-service
          process-compose."default-service" = {
            imports = [
              inputs.services-flake.processComposeModules.default
            ];
          };

          packages.default = app;

          devshells.default = {
          #   inputsFrom = [
          #     config.process-compose."default-service".services.outputs.devShell
          #   ];

            env = [
            ];
            commands = [
              {
                help = "print hello";
                name = "hello";
                command = "echo hello";
              }
              {
              name = "initPostgres";
              help = "Initialize the Postgres database";
              command = ''
              if [ -d pgdata ] && [ "$(ls -A pgdata)" ]; then
                echo "pgdata already exists and is not empty, skipping initdb"
              else
                initdb --locale=C.UTF-8 pgdata
                chmod -R 700 pgdata
              fi
              '';
              }
            ];
            packages = with pkgs; [
              nixd
              postgresql_18
              nix
            ];

            serviceGroups = {
              database = {
                services.postgres = {
                  command = "postgres -D ./pgdata -k \"\"";
                };
                # services.memcached = {
                #   command = "memcached";
                # };
              };
            };
          };
 
          # devShells.default = pkgs.mkShell {
          #   inputsFrom = [
          #     config.process-compose."default-service".services.outputs.devShell
          #   ];
          #
          #   packages = with pkgs; [
          #     nixd
          #   ];
          # };
        };
    };
}
