defmodule ExGleamRustlerTest do
  use ExUnit.Case
  doctest ExGleamRustler

  test "greets the world" do
    assert ExGleamRustler.hello() == :world
  end
end
