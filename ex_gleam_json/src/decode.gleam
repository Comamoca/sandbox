import gleam/dict.{type Dict}
import gleam/dynamic.{type Dynamic, field, int, string}
import gleam/io
import gleam/json
import schema.{type Favorites, type Idol, Favorites, Idol}

const json_text = "{\"name\":\"arisu\",\"age\":12,\"favorites\":{\"food\":\"strawberry\",\"hobby\":\"game\"}}"

pub fn decode(text: String) {
  json.decode(
    text,
    dynamic.decode3(
      Idol,
      field(named: "name", of: string),
      field(named: "age", of: int),
      field(
        named: "favorites",
        of: dynamic.decode2(
          Favorites,
          field(named: "hobby", of: string),
          field(named: "food", of: string),
        ),
      ),
    ),
  )
}
