import gleam/erlang/process
import gleam/io
import glenvy/dotenv
import mist
import router
import store
import wisp

pub fn main() {
  let _ = dotenv.load()

  let assert Ok(client) = store.setup()
  store.delete_all(client)
  |> io.debug

  // Set logger
  wisp.configure_logger()

  // Generate secret key
  let secret_key_base = wisp.random_string(64)

  // Start the Mist web server.
  let assert Ok(_) =
    wisp.mist_handler(router.handle_request, secret_key_base)
    |> mist.new
    |> mist.port(8000)
    |> mist.start_http

  process.sleep_forever()
}
