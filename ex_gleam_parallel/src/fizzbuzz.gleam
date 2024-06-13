import gleam/int
import gleam/io
import gleam/iterator
import gleam/list
import gleam/otp/task
import gleam/string
import gleamy/bench

const step_size = 100_000

pub fn main() {
  bench.run(
    [bench.Input("Input", list.range(1, 100_000))],
    [
      bench.Function("paralell", paralell),
      bench.Function("not_paralell", not_paralell),
    ],
    [bench.Duration(1000), bench.Warmup(100)],
  )
  |> bench.table([bench.IPS, bench.Min, bench.P(99)])
  |> io.println()
}

fn fizzbuzz(n: Int) -> String {
  case n % 3, n % 5 {
    0, 0 -> "FizzBuzz"
    0, _ -> "Fizz"
    _, 0 -> "Buzz"
    _, _ -> int.to_string(n)
  }
}

fn paralell(ctx) {
  iterator.range(1, step_size)
  |> iterator.map(fn(n) { task.async(fn() { fizzbuzz(n) }) })
  |> iterator.to_list
  |> list.map(fn(t) { task.await(t, 10) })
  |> string.join("\n")
  |> io.println
}

fn not_paralell(ctx) {
  iterator.range(1, step_size)
  |> iterator.to_list
  |> list.map(fn(n) { fizzbuzz(n) })
  |> string.join("\n")
  |> io.println
}
