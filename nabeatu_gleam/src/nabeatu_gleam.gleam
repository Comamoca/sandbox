import gleam/io
import gleam/list
import gleam/int

fn nabeatu(x: Int) -> String {
  case x%3 {
    0 -> "アホになる"
    _ -> int.to_string(x)
  }
}

pub fn main() {
  list.range(1,30)
  |> list.map(nabeatu)
  |> list.each(io.println)
}
