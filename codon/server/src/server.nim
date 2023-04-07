import asynchttpserver, asyncdispatch, strutils

const HTML = {"Content-type": "text/html; charset=utf-8"}
const JSON = {"Content-type": "application/json; charset=utf-8"}

proc responce(req: Request, code: HttpCode, content: string,
    header: auto = HTML) {.async.} =
  await req.respond(code, content, header.newHttpHeaders())

proc run*(port: int, content: string) {.async dynlib exportc.} =
  var server = newAsyncHttpServer()

  proc cb(req: Request) {.async.} =
    if req.reqMethod == HttpGet:
      let path = req.url.path

      case path
      of "/":
        await req.responce(Http200, content, HTML)

      else:
        await req.responce(Http404, "Not Found")

  waitFor server.serve(Port(port), cb)
