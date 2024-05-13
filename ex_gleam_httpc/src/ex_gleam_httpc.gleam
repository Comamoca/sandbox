import fetch
import gleam/dict
import gleam/dynamic.{type Dynamic, field, string}
import gleam/http.{Get}
import gleam/http/request
import gleam/http/response.{type Response}
import gleam/httpc
import gleam/io
import gleam/json
import gleam/list
import gleam/option.{type Option, None, Some}
import gleam/otp/task
import gleam/result
import gleam/string

const area_codes = [
  #("sapporo", "016000"),
  #("tokyo", "130000"),
  #("okinawa", "471000"),
]

pub fn main() {
  let tasks =
    list.map(area_codes, fn(area) {
      use <- task.async()

      let code = area.1
      use forecast <- result.try(fetch.fetch_forecast(code))
      io.println(forecast)

      Ok(forecast)
    })

  let texts =
    list.map(tasks, fn(t) { task.await_forever(t) })
    |> result.all

  use texts <- result.try(texts)
  list.map(texts, fn(text) { io.println(text) })

  Ok(Nil)
}
