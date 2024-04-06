import gleam/iterator
import gleam/list
import gleam/int

pub opaque type FizzBuzz {
  Fizz(text: String)
  Buzz(text: String)
  N(text: String)
}

pub fn from_int(max: Int) -> List(FizzBuzz) {
  iterator.range(1, max)
  |> iterator.map(fn(n) {
    case n % 15 {
      3 | 6 | 9 | 12 -> Fizz("Fizz")
      5 | 10 -> Buzz("Buzz")
      n -> N(int.to_string(n))
    }
  })
  |> iterator.to_list
}

pub fn to_string(list: List(FizzBuzz)) -> List(String) {
  list
  |> list.map(fn(l) { l.text })
}
