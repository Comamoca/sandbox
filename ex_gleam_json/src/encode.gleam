import gleam/json.{int, object, string}

pub fn encode() {
  object([
    #("name", string("arisu")),
    #("age", int(12)),
    #(
      "favorites",
      object([#("food", string("strawberry")), #("hobby", string("game"))]),
    ),
  ])
  |> json.to_string
}
