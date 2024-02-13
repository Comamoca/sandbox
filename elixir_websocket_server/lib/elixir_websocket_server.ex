defmodule ElixirWebsocketServer.Socket do
  def init(_args) do
    {:ok, []}
  end

  def handle_in({"ping", [opcode: :text]}, state) do
    {:reply, :ok, {:text, "pong"}, state}
  end
end

defmodule ElixirWebsocketServer.Router do
  use Plug.Router
  use Plug.ErrorHandler

  plug :match
  plug :dispatch

  get "/" do
    conn
    # |> put_resp_content_type("text/plain")
    # |> send_resp(200, "Hello")
    |> WebSockAdapter.upgrade(ElixirWebsocketServer.Socket, [], timeout: 60_000)
    |> halt()
  end
end
