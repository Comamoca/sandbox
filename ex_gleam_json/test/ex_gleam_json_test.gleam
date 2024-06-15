import decode
import encode
import gleeunit
import gleeunit/should

const json_text = "{\"name\":\"arisu\",\"age\":12,\"favorites\":{\"food\":\"strawberry\",\"hobby\":\"game\"}}"

pub fn main() {
  gleeunit.main()
}

pub fn encode_test() {
  encode.encode()
  |> should.equal(json_text)
}

pub fn decode_test() {
  let idol = decode.decode(json_text)

  should.be_ok(idol)

  let assert Ok(idol) = idol
  let fav = idol.favorites

  should.equal(idol.name, "arisu")
  should.equal(idol.age, 12)

  should.equal(fav.food, "strawberry")
  should.equal(fav.hobby, "game")
}
