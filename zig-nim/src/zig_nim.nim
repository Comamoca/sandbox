const path = "ここに共有ライブラリまでの絶対パスを記述"

proc add(x: cint, y: cint): int {.dynlib: path, importc: "add".}
proc print(text: cstring): void {.dynlib: path, importc: "print".}
proc getseckey(): pointer {.dynlib: path, importc: "getseckey".}

# echo(add(1, 1)) # 2
# print("もじれつ\n")

let seckey = getseckey();

echo repr(seckey)
