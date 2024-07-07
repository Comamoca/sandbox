import gleam/http/request
import gleam/httpc
import gleam/int
import gleam/io
import gleam/result
import gleam/string
import schema/github/user

const endpoint = "https://api.github.com/user"

pub fn fetch_user_info(token: String) {
  use resp <- result.try(fetch_json(token))
  io.debug(resp)
  case user.from_string(resp.body) {
    Ok(user_info) -> {
      Ok(user_info)
    }
    Error(_) -> {
      Error(Nil)
    }
  }
}

pub fn build_user_info(user_info: user.GitHub) -> String {
  [
    "user name: ",
    user_info.name,
    "user_info id",
    int.to_string(user_info.id),
    "user_info url: ",
    user_info.url,
  ]
  |> string.concat
}

fn fetch_json(token: String) {
  use req <- result.try(request.to(endpoint))
  let req =
    req
    |> request.set_header("Accept", "application/vnd.github+json")
    |> request.set_header("Authorization", "Bearer " <> token)
    |> request.set_header("X-GitHub-Api-Version", "2022-11-28")
    |> request.set_header("User-Agent", "curl/7.43.0")

  io.debug(req)

  case httpc.send(req) {
    Ok(resp) -> Ok(resp)
    Error(_) -> {
      io.debug("http.send")
      Error(Nil)
    }
  }
}
