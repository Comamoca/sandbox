import gleam/int
import gleam/io
import gleam/string
import gleam_community/maths/arithmetics

pub fn main() {
  arithmetics.gcd(12, 18)
  |> fn(gcd) {
    io.println(
      ["12 and 18 greatest common divisor is ", int.to_string(gcd)]
      |> string.concat,
    )
  }
}
