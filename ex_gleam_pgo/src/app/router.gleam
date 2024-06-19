import db/client
import db/schema
import gleam/erlang/os
import gleam/http.{Get, Post}
import gleam/result
import gleam/string_builder
import wisp.{type Request, type Response}
import www/index

pub fn handle_request(req: Request) -> Response {
  case wisp.path_segments(req) {
    [] -> home_page(req)

    ["comments"] -> comments(req)

    _ -> wisp.not_found()
  }
}

fn home_page(req: Request) -> Response {
  use <- wisp.require_method(req, Get)
  let host = result.unwrap(os.get_env("PG_HOST"), "localhost")

  let idols =
    client.connect(
      // TODO: Cahnge this value!
      host: host,
      user: "postgres",
      password: "postgres",
      database: "u149",
    )
    |> client.get_all_idols()

  // let html = string_builder.from_string("Hello, Joe!")

  case idols {
    Ok(idols) -> {
      let html = index.render(idols)

      wisp.ok()
      |> wisp.html_body(html)
    }
    Error(_) -> {
      let html = string_builder.from_string("Cant connect to DB")

      wisp.ok()
      |> wisp.html_body(html)
    }
  }
}

fn comments(req: Request) -> Response {
  // This handler for `/comments` can respond to both GET and POST requests,
  // so we pattern match on the method here.
  case req.method {
    Get -> list_comments()
    _ -> wisp.method_not_allowed([Get, Post])
  }
}

fn list_comments() -> Response {
  // In a later example we'll show how to read from a database.
  let html = string_builder.from_string("Comments!")
  wisp.ok()
  |> wisp.html_body(html)
}
