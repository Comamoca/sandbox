defmodule SupervisorEx.Application do
  # See https://hexdocs.pm/elixir/Application.html
  # for more information on OTP Applications
  @moduledoc false

  use Application

  @impl true
  def start(_type, _args) do
    import Supervisor.Spec, warn: false

    children = [
      # Starts a worker by calling: SupervisorEx.Worker.start_link(arg)
      {SupervisorEx.Worker, [123]},
      Plug.Cowboy.child_spec(
        scheme: :http,
        plug: APIServer.Router,
        options: [port: 4001]
      )
    ]

    # See https://hexdocs.pm/elixir/Supervisor.html
    # for other strategies and supported options
    opts = [strategy: :one_for_one, name: SupervisorEx.Supervisor]
    resp = Supervisor.start_link(children, opts)

    startup()
    resp
  end

  def echo(name) do
    "Hi #{name}! This is ehco function!"
  end

  def startup() do
    IO.puts("Hi! this server is launch on Elixir Supervisor✨")
  end
end
