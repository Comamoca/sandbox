import gleam/http/request
import gleam/io
import gwt
import wisp

pub fn jwt(req: wisp.Request, secret: String) -> Bool {
  let token = request.get_header(req, "Authorization")
  case token {
    Ok(token) -> {
      case gwt.from_signed_string(token, secret) {
        Ok(jwt) -> {
          io.debug(jwt)
          io.debug("ok")
          True
        }
        Error(_) -> {
          io.debug("error")
          False
        }
      }
    }
    Error(_) -> False
  }
}
