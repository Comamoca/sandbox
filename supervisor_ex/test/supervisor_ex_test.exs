defmodule SupervisorExTest do
  use ExUnit.Case
  doctest SupervisorEx

  test "greets the world" do
    assert SupervisorEx.hello() == :world
  end
end
