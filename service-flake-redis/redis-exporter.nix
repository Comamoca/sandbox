{
  config,
  lib,
  name,
  pkgs,
  ...
}: {
  options = {
    package = lib.mkPackageOption pkgs "prometheus-redis-exporter" { };

    redis-addr = lib.mkOption {
      type = lib.types.str;
      default = "redis://localhost:6379";
      description = "Redis address";
    };

    redis-user = lib.mkOption {
      type = lib.types.str;
      default = "";
      description = "Redis username";
    };

    redis-password = lib.mkOption {
      type = lib.types.str;
      default = "";
      description = "Redis password";
    };

    redis-password-file = lib.mkOption {
      type = lib.types.str;
      default = "";
      description = "Redis password file";
    };
  };

  config = {
    outputs.settings = {
      processes.${name} = {
        command = "${lib.getExe config.package}
                    -redis.addr=${config.redis-addr}'
                    -redis.user=${config.redis-user}'
                    -redis.password=${config.redis-password}'
                    -redis.password-file=${config.redis-password-file}'";
      };
    };
  };
}
