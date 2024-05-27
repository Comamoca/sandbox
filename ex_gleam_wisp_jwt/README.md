# ex_gleam_wisp_jwt

JWT authorization for [wisp](https://gleam-wisp.github.io/wisp/).

```gleam
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
```
