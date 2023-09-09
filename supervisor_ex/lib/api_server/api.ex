defmodule APIServer.Router do
  import Plug.Conn

  use Plug.Router

  plug(:match)
  plug(:dispatch)

  plug :match
  plug :dispatch

  # パスパラメータ
  get "/hello/:name" do
    send_resp(conn, 200, "Hello! #{name}\n")
    |> halt()
  end

  # クエリパラメータ
  get "/query" do
    params = conn
    |> fetch_query_params()

    %{"query" => query} = params.query_params

    send_resp(conn, 200, "Yor query is #{query}\n")
    |> halt() # 2回目以降のリクエストでconnが再利用されてしまうのを防ぐ
  end

  match _ do
    send_resp(conn, 404, "not found\n")
  end
end
