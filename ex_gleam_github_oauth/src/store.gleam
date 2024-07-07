/// Thiny radish wrapper
import gleam/int
import gleam/io
import gleam/list as g_list
import gleam/result
import glenvy/env
import radish
import radish/list
import wisp

const redis_timeout = 128

// Create reddis connection
pub fn setup() {
  let redis_port = {
    let assert Ok(port) = env.get_string("REDIS_PORT")
    let assert Ok(port) = int.parse(port)
    port
  }

  let assert Ok(redis_password) = env.get_string("REDIS_PASSWORD")
  let assert Ok(redis_host) = env.get_string("REDIS_HOST")

  io.debug(redis_host)
  // let redis_host = "localhost"

  radish.start(redis_host, redis_port, [
    radish.Timeout(redis_timeout),
    radish.Auth(redis_password),
  ])
}

// Set key and value
pub fn set(client, key, value) {
  radish.set(client, key, value, redis_timeout)
}

// Get value by key
pub fn get(client, key) {
  radish.get(client, key, redis_timeout)
}

pub fn delete_all(client) {
  let assert Ok(keys) = radish.keys(client, "*", redis_timeout)
  radish.del(client, keys, redis_timeout)
}
