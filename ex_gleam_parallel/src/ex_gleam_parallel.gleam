import gleam/erlang/process
import gleam/int
import gleam/io
import gleam/iterator
import gleam/list
import gleam/otp/task
import gleam/string

pub fn main() {
  parallel()
}

fn not_parallel() {
  iterator.range(1, 10)
  |> iterator.map(fn(n) { sleep(n) })
  |> iterator.to_list
}

fn parallel() {
  iterator.range(1, 10)
  |> iterator.map(fn(n) { task.async(fn() { sleep(n) }) })
  |> iterator.to_list
  |> list.map(fn(t) { task.await_forever(t) })
}

fn sleep(n: Int) {
  io.println(string.concat(["[", int.to_string(n), "]", " Sleeping..."]))
  process.sleep(1000)
}
