import db/schema
import gleam/dynamic
import gleam/io
import gleam/list
import gleam/option.{None, Some}
import gleam/pgo
import gleam/result
import gleeunit/should

const host = "localhost"

pub fn main() {
  connect(host: host, user: "postgres", password: "postgres", database: "u149")
  |> get_all_idols()
  |> io.debug
}

pub fn connect(
  host host: String,
  user user: String,
  password password: String,
  database database: String,
) {
  pgo.connect(
    pgo.Config(
      ..pgo.default_config(),
      user: user,
      password: Some(password),
      host: host,
      database: database,
      pool_size: 15,
    ),
  )
}

pub fn get_all_idols(db) {
  let sql = "select * from idols"

  let return_type = dynamic.tuple3(dynamic.string, dynamic.int, dynamic.int)

  use resp <- result.try(pgo.execute(sql, db, [], return_type))
  resp.rows
  |> list.map(schema.from_tuple)
  |> Ok
}
