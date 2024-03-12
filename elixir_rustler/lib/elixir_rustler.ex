defmodule ElixirRustler.RustModule do
  use Rustler,
    otp_app: :elixir_rustler,
    crate: :elixirrustler_rustmodule

  @moduledoc """
  Documentation for `ElixirRustler.RustModule`.
  """

  @doc """
  iex> ElixirRustler.RustModule.add(1, 2)
  3
  
  iex> ElixirRustler.RustModule.div(10, 3)
  {:ok, 3}

  iex> ElixirRustler.RustModule.div(3, 0)
  {:error, 0}

  iex> [1, 2, 3] |> ElixirRustler.RustModule.multi_all(3)
  [3, 6, 9]

  iex> ElixirRustler.RustModule.reverse("夢色トレイン")
  "ンイレト色夢"

  iex> ElixirRustler.RustModule.sleep_3s()
  :ok
  """

  # Call add functions in Rust.
  def add(_a, _b), do: exit(:nif_not_loaded)
  def div(_a, _b), do: exit(:nif_not_loaded)
  def multi_all(_a, _b), do: exit(:nif_not_loaded)
  def reverse(_string), do: exit(:nif_not_loaded)
  def sleep_3s(), do: exit(:nif_not_loaded)
end
