import gleam/dynamic
import gleam/json.{type DecodeError}
import gleam/option.{type Option, None, Some}

pub type GitHub {
  User(id: Int, avatar_url: String, url: String, name: String, bio: String)
}

pub fn from_string(text: String) -> Result(GitHub, DecodeError) {
  text
  |> json.decode(dynamic.decode5(
    User,
    dynamic.field(named: "id", of: dynamic.int),
    dynamic.field(named: "avatar_url", of: dynamic.string),
    dynamic.field(named: "url", of: dynamic.string),
    dynamic.field(named: "name", of: dynamic.string),
    dynamic.field(named: "bio", of: dynamic.string),
  ))
}
