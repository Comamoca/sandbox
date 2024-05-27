import gleam/erlang/process
import gleam/http/request
import gleam/io
import gleam/string_builder
import gwt
import mist
import wisp.{type Request, type Response}

pub fn unauth() -> Response {
  create_responce(401, "Unauthorized")
}

pub fn ok() -> Response {
  create_responce(200, "Ok")
}

pub fn not_found() -> Response {
  create_responce(404, "Not Found")
}

pub fn create_responce(status: Int, message: String) -> Response {
  let body = string_builder.from_string(message)
  wisp.response(status)
  |> wisp.set_body(wisp.Text(body))
}
