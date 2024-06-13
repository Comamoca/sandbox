pub type RawTime =
  #(#(Int, Int, Int), #(Int, Int, Int))

pub opaque type DateTime {
  DateTime(
    year: Int,
    month: Int,
    day: Int,
    hours: Int,
    minutes: Int,
    seconds: Int,
  )
}

pub fn to_datetime(raw: RawTime) -> DateTime {
  let day = raw.0
  let time = raw.1

  DateTime(
    year: day.0,
    month: day.1,
    day: day.2,
    hours: time.0,
    minutes: time.1,
    seconds: time.2,
  )
}
