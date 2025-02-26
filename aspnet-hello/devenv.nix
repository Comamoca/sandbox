{ pkgs, config, ... }:
{

  packages = with pkgs; [
    nil
    csharp-ls
  ];

  languages.dotnet.enable = true;
  # languages.dotnet.package = pkgs.dotnet-aspnetcore_9;

  tasks = {
      "mytask:hello" = {
        exec = ''
          echo "Hello!"
        '';
    };
  };

  enterShell = '''';
}
