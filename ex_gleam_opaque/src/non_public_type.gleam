pub type NonPublic {
  NonPublic(text: String)
}

pub fn return_nonpub(text: String) -> NonPublic {
  NonPublic(text)
}
