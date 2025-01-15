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

          process-compose."default-service" =
            { config, ... }:
            let
              inherit (inputs.services-flake.lib) multiService;
            in
            {
              imports = [
                inputs.services-flake.processComposeModules.default
                (multiService ./redis-exporter.nix)
              ];

              services = {
                redis."r1" = {
                  enable = true;
                  port = 6379; # port 6379 is the default
                };

                redis-exporter."exp1" = {
                  enable = true;
                };

                prometheus."pro1" = {
                  enable = true;
                  extraConfig = {
                    scrape_configs = [
                      {
                        job_name = "prometheus";
                        static_configs = [
                          {
                            targets = [ "localhost:9090" ];
                          }
                        ];
                      }
                      {
                        job_name = "redis";
                        static_configs = [
                          {
                            targets = [ "localhost:9121" ];
                          }
                        ];
                      }
                    ];
                  };
                };

                grafana."gf1" = {
                  enable = true;
                  declarativePlugins = with pkgs.grafanaPlugins; [
                    grafana-clock-panel
                    frser-sqlite-datasource

                    redis-app
                    redis-datasource
                    redis-explorer-app
                  ];
                };
              };
            };

          devShells.default = pkgs.mkShell {
            inputsFrom = [
              config.process-compose."default-service".services.outputs.devShell
            ];

            packages = with pkgs; [
              nil
            ];
          };
        };
    };
}
