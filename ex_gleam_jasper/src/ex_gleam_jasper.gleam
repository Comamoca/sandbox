import gleam/http/request
import gleam/httpc
import gleam/io
import gleam/result
import jasper.{Array, Index, Key, Root, String, parse_json, query_json}

pub fn main() {
  let url = "https://www.jma.go.jp/bosai/forecast/data/forecast/130000.json"
  let assert Ok(req) = request.to(url)

  use resp <- result.try(httpc.send(req))

  let assert Ok(json) = parse_json(resp.body)
  let assert Ok(Array([String(today), String(tomorrow), String(two_days_after)])) =
    json
    |> query_json(
      Root
      |> Index(0)
      |> Key("timeSeries")
      |> Index(0)
      |> Key("areas")
      |> Index(0)
      |> Key("weathers"),
    )

  io.println(today)
  io.println(tomorrow)
  io.println(two_days_after)

  Ok(resp)
}
