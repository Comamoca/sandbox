import gleam/bool
import gleam/erlang/process
import middleware
import mist
import resp
import wisp.{type Request, type Response}

pub fn main() {
  wisp.configure_logger()
  let secret_key_base = wisp.random_string(64)

  let assert Ok(_) =
    wisp.mist_handler(handle_request, secret_key_base)
    |> mist.new
    |> mist.port(8000)
    |> mist.start_http

  process.sleep_forever()
}

pub fn handle_request(req: Request) -> Response {
  use <- wisp.log_request(req)
  use <- wisp.rescue_crashes

  case wisp.path_segments(req) {
    [] -> resp.create_responce(200, "hello!")
    ["auth"] -> {
      use <- bool.guard(when: middleware.jwt(req, "secret"), return: resp.ok())
      resp.unauth()
    }
    _ -> resp.not_found()
  }
}
