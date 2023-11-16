import jsffi
import std/jsfetch
import htmlgen

const code = staticRead "./handler.nim"

{.emit: """
function HtmlResponse(body) {
  return new Response(body, {headers: { 'content-type': 'text/html;charset=UTF-8', }})
}
""".}

func HtmlResponse(body: cstring): Response {.importjs: "HtmlResponse(#)".}

func consoleLog(exp: auto) {.importjs: "console.log(#)".}

proc handler(req: Request): Response {.exportc.} =
  # consoleLog req

  let stylesheet = "stylesheet"

  let html = html(
  head(
      link(rel = stylesheet, href = "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/tokyo-night-dark.min.css"),
      link(rel = stylesheet, href = "https://unpkg.com/mvp.css"),
      script(src = "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js"),
      script(src = "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/languages/nim.min.js"),
      script("hljs.highlightAll();"),
    ),
    `div`(
    section(h1("Hello!")),
    section("This worker handler writtern by ", a(href = "https://nim-lang.org", " Nim"), "!"),
    section("Handler source code is berow!"),
    section(pre(code(code))))
  )

  let resp = HtmlResponse(cstring(html))

  return resp

{.emit: "export { handler }".}
