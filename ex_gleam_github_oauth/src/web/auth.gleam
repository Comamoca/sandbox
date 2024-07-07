import gleam/dict
import gleam/io
import gleam/option.{type Option, None, Some}
import gleam/result
import gleam/uri
import glenvy/env
import glow_auth
import glow_auth/access_token
import glow_auth/authorize_uri
import glow_auth/token_request
import glow_auth/uri/uri_builder
import gluid
import schema/github/user
import store
import wisp.{type Request, type Response}

// OAuth logic for GitHub
pub fn handler(req: Request) {
  // Get enviroment variables
  let assert Ok(client_id) = env.get_string("CLIENT_ID")

  // Generate state and to set Redis store
  let state = gluid.guidv4()

  let assert Ok(client) = store.setup()
  let assert Ok(_) = store.set(client, "state", state)

  // Generate URL
  let url =
    uri.Uri(
      scheme: Some("https"),
      userinfo: None,
      host: Some("github.com"),
      port: None,
      path: "login/oauth/authorize",
      query: Some(
        uri.query_to_string([#("client_id", client_id), #("state", state)]),
      ),
      fragment: None,
    )

  io.debug("Auth request to " <> uri.to_string(url))

  // Redirect to GitHub auth page
  wisp.redirect(to: uri.to_string(url))
}

pub fn handler_sub(req: Request) {
  // Get enviroment variables
  let assert Ok(client_id) = env.get_string("CLIENT_ID")
  let assert Ok(client_secret) = env.get_string("CLIENT_SECRET")

  // Generate state and to set Redis store
  let state = gluid.guidv4()

  let assert Ok(client) = store.setup()
  let assert Ok(_) = store.set(client, "state", state)

  let github =
    uri.Uri(
      scheme: Some("https"),
      userinfo: None,
      host: Some("github.com"),
      port: None,
      path: "",
      query: None,
      fragment: None,
    )

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

  let redirect_url =
    uri.Uri(
      scheme: Some("http"),
      userinfo: None,
      host: Some("localhost:8000"),
      port: None,
      path: "/auth",
      query: None,
      fragment: None,
    )

  let client = glow_auth.Client(client_id, client_secret, github)
  let auth_url =
    authorize_uri.build(client, uri_builder.FullUri(url), redirect_url)

  let code =
    wisp.get_query(req)
    |> dict.from_list
    |> dict.get("code")
    |> io.debug

  io.debug(auth_url)

  let assert Ok(code) =
    result.try(code, fn(code) {
      let token =
        token_request.authorization_code(
          client,
          uri_builder.FullUri(url),
          code,
          redirect_url,
        )

      io.debug(token)

      Ok(token)
    })

  io.debug(code)
}
