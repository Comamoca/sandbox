import gleam/int
import gleam/io
import gleam/iterator
import gleam/string

pub fn main() {
  iterator.range(1, 30)
  |> iterator.map(fn(n) {
    case n % 15 {
      0 -> "FizzBuzz"
      3 | 6 | 9 | 12 -> "Fizz"
      5 | 10 -> "Buzz"
      _ -> int.to_string(n)
    }
  })
  |> iterator.to_list
  |> string.join("\n")
  |> io.println
}
