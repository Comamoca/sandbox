import time_base.{type RawTime}

@target(javascript)
@external(javascript, "./ffi.mjs", "now")
pub fn now() -> RawTime
