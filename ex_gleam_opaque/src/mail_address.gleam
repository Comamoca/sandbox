import gleam/regex

pub opaque type EmailAddress {
  EmailAddress(address: String)
}

pub fn from_string(str: String) -> Result(EmailAddress, String) {
  let assert Ok(re) =
    "^[a-zA-Z0-9_+-]+(.[a-zA-Z0-9_+-]+)*@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\\.)+[a-zA-Z]{2,}$"
    |> regex.from_string

  case regex.check(re, str) {
    True -> Ok(EmailAddress(str))
    False -> Error("Cant convert EmailAddress.")
  }
}
