import time_base.{type RawTime}

@target(erlang)
@external(erlang, "calendar", "local_time")
pub fn now() -> RawTime
