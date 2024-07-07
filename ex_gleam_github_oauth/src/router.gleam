import gleam/bool
import gleam/dict
import gleam/http/request
import gleam/int
import gleam/io
import gleam/option.{type Option, None, Some}
import gleam/result
import gleam/string
import gleam/string_builder
import gleam/uri
import store
import web/auth
import web/callback
import web/github_user
import wisp.{type Request, type Response}

const oauth_proxy_host = "localhost"

pub fn handle_request(req: Request) -> Response {
  case wisp.path_segments(req) {
    [] -> {
      io.debug("=== Store Setup ===")
      let assert Ok(client) = store.setup()
      io.debug("=== TOKEN ===")
      let assert Ok(token) = store.get(client, "gh_token")
      io.debug(token)
      io.debug("=== USER INFO ===")
      let assert Ok(user) = github_user.fetch_user_info(token)
      let user_info = github_user.build_user_info(user)

      io.debug(user_info)

      string_builder.from_string("<p>" <> user_info <> "</p>")
      |> wisp.html_response(200)
    }
    // ["auth"] -> auth.handler(req)
    ["auth"] -> wisp.redirect("http://" <> oauth_proxy_host <> ":4180")
    ["auth", "callback", "code"] -> callback.handler(req)
    _ -> {
      string_builder.from_string("<h1>Not Found</h1>")
      |> wisp.html_response(404)
    }
  }
}
