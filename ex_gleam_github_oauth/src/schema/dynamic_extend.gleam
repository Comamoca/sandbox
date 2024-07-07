import gleam/dynamic.{
  type DecodeError, type DecodeErrors, type Decoder, type Dynamic,
}
import gleam/list

fn all(result: Result(a, List(DecodeError))) -> List(DecodeError) {
  case result {
    Ok(_) -> []
    Error(err) -> err
  }
}
