import gleeunit
import gleeunit/should
import gleam/io
import gleam/list
import gleam/result
import even
import fizzbuzz
import mail_address

pub fn main() {
  gleeunit.main()
}

pub fn even_test() {
  let assert Ok(n) = even.from_int(8)

  n
  |> even.to_int
  |> should.equal(8)

  even.from_int(5)
  |> should.be_error
}

pub fn fizzbuzz_test() {
  fizzbuzz.from_int(5)
  |> fizzbuzz.to_string
  // |> io.debug
  |> should.equal(["1", "2", "Fizz", "4", "Buzz"])
}

pub fn mail_address_test() {
  let email_address = ["comamoca.dev@gmail.com", "john.smith@example.com"]

  email_address
  |> list.map(fn(address) { mail_address.from_string(address) })
  |> result.all
  |> should.be_ok
}
