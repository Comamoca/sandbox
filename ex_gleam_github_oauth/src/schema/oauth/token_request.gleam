import gleam/json.{nullable, object, string}
import gleam/option.{type Option}

pub type TokenRequest {
  TokenRequest(
    client_id: String,
    client_secret: String,
    code: String,
    redirect_uri: Option(String),
  )
}

pub fn to_string(token_request: TokenRequest) {
  object([
    #("client_id", string(token_request.client_id)),
    #("client_secret", string(token_request.client_secret)),
    #("code", string(token_request.code)),
    #("redirect_uri", nullable(token_request.redirect_uri, of: string)),
  ])
  |> json.to_string
}
