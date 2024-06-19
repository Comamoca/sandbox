pub type Idol {
  Idol(name: String, age: Int, height: Int)
}

pub fn from_tuple(tup: #(String, Int, Int)) {
  Idol(tup.0, tup.1, tup.2)
}
