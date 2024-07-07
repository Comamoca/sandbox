import gleam/dynamic
import gleam/json

pub type AccessToken {
  AccessToken(access_token: String, token_type: String, scope: String)
}

pub fn from_string(text: String) {
  text
  |> json.decode(dynamic.decode3(
    AccessToken,
    dynamic.field(named: "access_token", of: dynamic.string),
    dynamic.field(named: "token_type", of: dynamic.string),
    dynamic.field(named: "scope", of: dynamic.string),
  ))
}
