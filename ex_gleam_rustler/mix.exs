defmodule ExGleamRustler.MixProject do
  use Mix.Project

  @app :ex_gleam_rustler

  def project do
    [
      app: @app,
      version: "0.1.0",
      elixir: "~> 1.16-rc",
      start_permanent: Mix.env() == :prod,
      deps: deps(),
      archives: [mix_gleam: "~> 0.6.2"],
      compilers: [:gleam] ++ Mix.compilers(),
      aliases: [
        # Or add this to your aliases function
        "deps.get": ["deps.get", "gleam.deps.get"]
      ],
      erlc_paths: [
        "build/dev/erlang/#{@app}/_gleam_artefacts",
        # For Gleam < v0.25.0
        "build/dev/erlang/#{@app}/build"
      ],
      erlc_include_path: "build/dev/erlang/#{@app}/include",
      # For Elixir >= v1.15.0
      prune_code_paths: false,
    ]
  end

  # Run "mix help compile.app" to learn about applications.
  def application do
    [
      extra_applications: [:logger]
    ]
  end

  # Run "mix help deps" to learn about dependencies.
  defp deps do
    [
      {:mix_gleam, "~> 0.6.2"},
      {:rustler, "~> 0.31.0"},
      {:gleam_stdlib, "~> 0.36.0"},
      {:gleeunit, "~> 1.0"}
      # {:dep_from_hexpm, "~> 0.3.0"},
      # {:dep_from_git, git: "https://github.com/elixir-lang/my_dep.git", tag: "0.1.0"}
    ]
  end
end
