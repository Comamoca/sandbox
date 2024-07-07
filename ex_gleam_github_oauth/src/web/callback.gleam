import gleam/bool
import gleam/dict
import gleam/erlang/process
import gleam/function
import gleam/http.{Post}
import gleam/http/request
import gleam/httpc
import gleam/io
import gleam/json.{array, int, null, object, string}
import gleam/option.{type Option, None, Some}
import gleam/result
import gleam/string_builder
import gleam/uri
import glenvy/env
import schema/oauth/access_token
import schema/oauth/token_request
import store
import wisp.{type Request, type Response}

pub fn handler(req: Request) {
  let assert Ok(client_id) = env.get_string("CLIENT_ID")
  let assert Ok(client_secret) = env.get_string("CLIENT_SECRET")

  // GitHub callback
  let assert Ok(state) =
    wisp.get_query(req)
    |> io.debug
    |> dict.from_list
    |> dict.get("state")

  let code =
    wisp.get_query(req)
    |> io.debug
    |> dict.from_list
    |> dict.get("code")

  let assert Ok(client) = store.setup()

  let assert Ok(code) =
    wisp.get_query(req)
    |> dict.from_list
    |> dict.get("code")

  io.debug("GET_TOKEN")

  let assert Ok(token) = get_token(code, client_id, client_secret)

  io.debug(token)

  let assert Ok(client) = store.setup()
  let assert Ok(_) = store.set(client, "gh_token", token.access_token)

  wisp.redirect("http://localhost:8000/")
}

fn get_token(
  code: String,
  client_id: String,
  client_secret: String,
) -> Result(access_token.AccessToken, Nil) {
  case httpc.send(generate_token_request(code, client_id, client_secret)) {
    Ok(resp) -> {
      io.debug("RESP BODY")
      case access_token.from_string(resp.body) {
        Ok(json_text) -> Ok(json_text)
        Error(_) -> Error(Nil)
      }
    }
    Error(_) -> Error(Nil)
  }
}

fn generate_token_request(
  code: String,
  client_id: String,
  client_secret: String,
) {
  let url =
    uri.Uri(
      scheme: Some("https"),
      userinfo: None,
      host: Some("github.com"),
      port: None,
      path: "login/oauth/access_token",
      query: None,
      fragment: None,
    )

  let token_req =
    token_request.TokenRequest(
      client_id: client_id,
      client_secret: client_secret,
      code: code,
      redirect_uri: None,
    )

  let assert Ok(req) =
    uri.to_string(url)
    |> request.to

  io.debug("TOKEN_REQUEST" <> token_request.to_string(token_req))

  let result =
    req
    |> request.set_method(Post)
    |> request.set_header("Content-Type", "application/json")
    |> request.set_header("Accept", "application/json")
    |> request.set_body(token_request.to_string(token_req))

  io.debug("Request created")

  result
}
