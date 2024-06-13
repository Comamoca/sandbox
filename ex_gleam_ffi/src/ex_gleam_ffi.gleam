@target(erlang)
import erlang_time.{now}
import gleam/io
@target(javascript)
import js_time.{now}
import time_base.{to_datetime}

pub fn main() {
  now()
  |> to_datetime
  |> io.debug
}
