# include karax/prelude
#
# proc createDom(): VNode =
#   return buildHtml(tdiv):
#     text "Hello Nim!"
#
# setRenderer createDom

import htmlgen

# <link rel="stylesheet" href="https://unpkg.com/mvp.css">

let rel = "stylesheet"
let href = "https://unpkg.com/mvp.css"

let html = `div`(
  link(rel = rel, href = href),
  h1("Hello!")
)
