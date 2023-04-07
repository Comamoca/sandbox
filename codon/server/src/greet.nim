proc greet*(name: cstring): cstring {.exportc.} =
  return "Hi! " & "{name}!"
