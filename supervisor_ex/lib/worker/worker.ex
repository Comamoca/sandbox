defmodule SupervisorEx.Worker do
  use GenServer

  @doc """
  キューを開始し、リンクします。
  これはヘルパー関数です。
  """
  def start_link(state \\ []) do
    IO.puts("Launching Server...")
    GenServer.start_link(__MODULE__, state, name: __MODULE__)
  end

  @doc """
  GenServer.init/1コールバック
  """
  def init(state), do: {:ok, state}
end
