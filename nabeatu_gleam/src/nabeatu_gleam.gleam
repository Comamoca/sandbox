import gleam/io
import gleam/list
import gleam/int
import gleam/string

const aho = "アホになる"

fn nabeatu(x: Int) -> String {
  let result = case x%3 {
    0 -> aho
    _ -> int.to_string(x)
    }

  case string.contains(result, "3") {
    True -> aho
    False -> result
  }
}

pub fn main() {
  list.range(1,30)
  |> list.map(nabeatu)
  |> list.each(io.println)
}
