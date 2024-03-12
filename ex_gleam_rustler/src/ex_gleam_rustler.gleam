import gleam/io
import gleam/int

@external(erlang, "Elixir.RustModule", "add")
pub fn add(a: Int, b: Int) -> Int

pub fn call_rust_add_in_gleam(a: Int, b: Int) {
  io.println(int.to_string(add(a, b)))
}
