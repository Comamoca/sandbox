import gleam/io
import gleam/result

pub fn main() {
  io.println("Please run `gleam test`")
}

// Cases where values are used internally.
fn even(n: Int) -> Result(Int, String) {
  case n % 2 {
    0 -> Ok(n)
    _ -> Error("Not even.")
  }
}

pub fn without_use() {
  result.try(even(2), fn(n) { Ok(n * 2) })
}

pub fn with_use() {
  use n <- result.try(even(2))
  Ok(n * 2)
}

// ===========================================

// Cases where values are not used internally.
pub fn with_use_novalue() {
  use <- middle_1()
  use <- middle_2()
  "hi"
}

pub fn without_use_novalue() {
  middle_2(fn() { middle_1(fn() { "hi" }) })
}

fn middle_1(next: fn() -> String) {
  next()
}

fn middle_2(next: fn() -> String) {
  next()
}
