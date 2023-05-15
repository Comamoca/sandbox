import gleam/http/elli
import gleam/http/response.{Response}
import gleam/http/request.{Request}
import gleam/bit_builder.{BitBuilder}
import gleam/io
import gleam/int
import gleam/string

// Define a HTTP service

pub fn my_service(_request: Request(t)) -> Response(BitBuilder) {
  io.println("reauestd!")
  let body = bit_builder.from_string("Hello, world!")

  response.new(200)
  |> response.prepend_header("made-with", "Gleam")
  |> response.set_body(body)
}

pub fn main() {
  let port = 3030
  
  io.println(string.concat(["Server is Start on http://localhost:", int.to_string(port)]))
  elli.become(my_service, on_port: port)
}
