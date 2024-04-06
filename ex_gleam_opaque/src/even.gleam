pub opaque type Even {
  Even(num: Int)
}

pub fn from_int(n: Int) -> Result(Even, Int) {
  case n % 2 {
    0 -> Ok(Even(n))
    _ -> Error(n)
  }
}

pub fn to_int(n: Even) -> Int {
  n.num
}
