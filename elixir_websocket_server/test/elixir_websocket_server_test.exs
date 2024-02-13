defmodule ElixirWebsocketServerTest do
  use ExUnit.Case
  doctest ElixirWebsocketServer

  test "greets the world" do
    assert ElixirWebsocketServer.hello() == :world
  end
end
