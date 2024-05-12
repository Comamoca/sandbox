import ex_gleam_use
import gleeunit
import gleeunit/should

pub fn main() {
  gleeunit.main()
}

pub fn use_test() {
  let a = ex_gleam_use.without_use()
  let b = ex_gleam_use.with_use()

  should.equal(a, Ok(4))
  should.equal(b, Ok(4))

  should.equal(a, b)
}

pub fn use_novalue_test() {
  let a = ex_gleam_use.with_use_novalue()
  let b = ex_gleam_use.without_use_novalue()

  should.equal(a, "hi")
  should.equal(b, "hi")

  should.equal(a, b)
}
