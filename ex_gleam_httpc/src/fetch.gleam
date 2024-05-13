import gleam/dynamic.{type Dynamic, field, string}
import gleam/http.{Get}
import gleam/http/request
import gleam/http/response.{type Response}
import gleam/httpc
import gleam/io
import gleam/json
import gleam/option.{type Option, None, Some}
import gleam/result
import gleam/string

pub fn fetch_forecast(area_code: String) {
  let url =
    string.concat([
      "https://www.jma.go.jp/bosai/forecast/data/overview_forecast/",
      area_code,
      ".json",
    ])

  io.debug(url)

  let assert Ok(req) = request.to(url)

  use resp <- result.try(send(req))
  use text <- result.try(parse_json(resp.body))

  Ok(text)
}

fn parse_json(body: String) {
  case json.decode(body, field(named: "text", of: string)) {
    Ok(val) -> Ok(val)
    Error(_) -> Error(Nil)
  }
}

fn send(req) {
  case httpc.send(req) {
    Ok(val) -> Ok(val)
    Error(_) -> Error(Nil)
  }
}
