/* Generated by the Nim Compiler v2.0.0 */
var framePtr = null;
var excHandler = 0;
var lastJSError = null;

function makeNimstrLit(c_33556895) {
      var result = [];
  for (var i = 0; i < c_33556895.length; ++i) {
    result[i] = c_33556895.charCodeAt(i);
  }
  return result;
  

  
}

function toJSStr(s_33556901) {
  var result_33556902 = null;

    var res_33556943 = newSeq_33556919((s_33556901).length);
    var i_33556944 = 0;
    var j_33556945 = 0;
    Label1: {
        Label2: while (true) {
        if (!(i_33556944 < (s_33556901).length)) break Label2;
          var c_33556946 = s_33556901[i_33556944];
          if ((c_33556946 < 128)) {
          res_33556943[j_33556945] = String.fromCharCode(c_33556946);
          i_33556944 += 1;
          }
          else {
            var helper_33556959 = newSeq_33556919(0);
            Label3: {
                Label4: while (true) {
                if (!true) break Label4;
                  var code_33556960 = c_33556946.toString(16);
                  if ((((code_33556960) == null ? 0 : (code_33556960).length) == 1)) {
                  helper_33556959.push("%0");;
                  }
                  else {
                  helper_33556959.push("%");;
                  }
                  
                  helper_33556959.push(code_33556960);;
                  i_33556944 += 1;
                  if ((((s_33556901).length <= i_33556944) || (s_33556901[i_33556944] < 128))) {
                  break Label3;
                  }
                  
                  c_33556946 = s_33556901[i_33556944];
                }
            };
++excHandler;
            try {
            res_33556943[j_33556945] = decodeURIComponent(helper_33556959.join(""));
--excHandler;
} catch (EXCEPTION) {
 var prevJSError = lastJSError;
 lastJSError = EXCEPTION;
 --excHandler;
            res_33556943[j_33556945] = helper_33556959.join("");
            lastJSError = prevJSError;
            } finally {
            }
          }
          
          j_33556945 += 1;
        }
    };
    if (res_33556943.length < j_33556945) { for (var i = res_33556943.length ; i < j_33556945 ; ++i) res_33556943.push(null); }
               else { res_33556943.length = j_33556945; };
    result_33556902 = res_33556943.join("");

  return result_33556902;

}
var F = {procname: "module macros", prev: framePtr, filename: "/home/coma/.choosenim/toolchains/nim-2.0.0/lib/core/macros.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module macros", prev: framePtr, filename: "/home/coma/.choosenim/toolchains/nim-2.0.0/lib/core/macros.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsbigints", prev: framePtr, filename: "/home/coma/.choosenim/toolchains/nim-2.0.0/lib/std/jsbigints.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsbigints", prev: framePtr, filename: "/home/coma/.choosenim/toolchains/nim-2.0.0/lib/std/jsbigints.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsutils", prev: framePtr, filename: "/home/coma/.choosenim/toolchains/nim-2.0.0/lib/std/private/jsutils.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsutils", prev: framePtr, filename: "/home/coma/.choosenim/toolchains/nim-2.0.0/lib/std/private/jsutils.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module hashes", prev: framePtr, filename: "/home/coma/.choosenim/toolchains/nim-2.0.0/lib/pure/hashes.nim", line: 0};
framePtr = F;
F.line = 218;
F.filename = "hashes.nim";
var objectID_704643249 = [0];
framePtr = F.prev;
var F = {procname: "module hashes", prev: framePtr, filename: "/home/coma/.choosenim/toolchains/nim-2.0.0/lib/pure/hashes.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module bitops_utils", prev: framePtr, filename: "/home/coma/.choosenim/toolchains/nim-2.0.0/lib/std/private/bitops_utils.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module bitops_utils", prev: framePtr, filename: "/home/coma/.choosenim/toolchains/nim-2.0.0/lib/std/private/bitops_utils.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module countbits_impl", prev: framePtr, filename: "/home/coma/.choosenim/toolchains/nim-2.0.0/lib/system/countbits_impl.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module countbits_impl", prev: framePtr, filename: "/home/coma/.choosenim/toolchains/nim-2.0.0/lib/system/countbits_impl.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module bitops", prev: framePtr, filename: "/home/coma/.choosenim/toolchains/nim-2.0.0/lib/pure/bitops.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module bitops", prev: framePtr, filename: "/home/coma/.choosenim/toolchains/nim-2.0.0/lib/pure/bitops.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module fenv", prev: framePtr, filename: "/home/coma/.choosenim/toolchains/nim-2.0.0/lib/pure/fenv.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module fenv", prev: framePtr, filename: "/home/coma/.choosenim/toolchains/nim-2.0.0/lib/pure/fenv.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module math", prev: framePtr, filename: "/home/coma/.choosenim/toolchains/nim-2.0.0/lib/pure/math.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module math", prev: framePtr, filename: "/home/coma/.choosenim/toolchains/nim-2.0.0/lib/pure/math.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module algorithm", prev: framePtr, filename: "/home/coma/.choosenim/toolchains/nim-2.0.0/lib/pure/algorithm.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module algorithm", prev: framePtr, filename: "/home/coma/.choosenim/toolchains/nim-2.0.0/lib/pure/algorithm.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module outparams", prev: framePtr, filename: "/home/coma/.choosenim/toolchains/nim-2.0.0/lib/std/outparams.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module outparams", prev: framePtr, filename: "/home/coma/.choosenim/toolchains/nim-2.0.0/lib/std/outparams.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module tables", prev: framePtr, filename: "/home/coma/.choosenim/toolchains/nim-2.0.0/lib/pure/collections/tables.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module tables", prev: framePtr, filename: "/home/coma/.choosenim/toolchains/nim-2.0.0/lib/pure/collections/tables.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsffi", prev: framePtr, filename: "/home/coma/.choosenim/toolchains/nim-2.0.0/lib/js/jsffi.nim", line: 0};
framePtr = F;
F.line = 45;
F.filename = "jsffi.nim";
F.line = 46;
framePtr = F.prev;
var F = {procname: "module jsffi", prev: framePtr, filename: "/home/coma/.choosenim/toolchains/nim-2.0.0/lib/js/jsffi.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module asyncjs", prev: framePtr, filename: "/home/coma/.choosenim/toolchains/nim-2.0.0/lib/js/asyncjs.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module asyncjs", prev: framePtr, filename: "/home/coma/.choosenim/toolchains/nim-2.0.0/lib/js/asyncjs.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module dom", prev: framePtr, filename: "/home/coma/.choosenim/toolchains/nim-2.0.0/lib/js/dom.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module dom", prev: framePtr, filename: "/home/coma/.choosenim/toolchains/nim-2.0.0/lib/js/dom.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsformdata", prev: framePtr, filename: "/home/coma/.choosenim/toolchains/nim-2.0.0/lib/std/jsformdata.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsformdata", prev: framePtr, filename: "/home/coma/.choosenim/toolchains/nim-2.0.0/lib/std/jsformdata.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsheaders", prev: framePtr, filename: "/home/coma/.choosenim/toolchains/nim-2.0.0/lib/std/jsheaders.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsheaders", prev: framePtr, filename: "/home/coma/.choosenim/toolchains/nim-2.0.0/lib/std/jsheaders.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module parseutils", prev: framePtr, filename: "/home/coma/.choosenim/toolchains/nim-2.0.0/lib/pure/parseutils.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module parseutils", prev: framePtr, filename: "/home/coma/.choosenim/toolchains/nim-2.0.0/lib/pure/parseutils.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module typetraits", prev: framePtr, filename: "/home/coma/.choosenim/toolchains/nim-2.0.0/lib/pure/typetraits.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module typetraits", prev: framePtr, filename: "/home/coma/.choosenim/toolchains/nim-2.0.0/lib/pure/typetraits.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module enumutils", prev: framePtr, filename: "/home/coma/.choosenim/toolchains/nim-2.0.0/lib/std/enumutils.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module enumutils", prev: framePtr, filename: "/home/coma/.choosenim/toolchains/nim-2.0.0/lib/std/enumutils.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module strbasics", prev: framePtr, filename: "/home/coma/.choosenim/toolchains/nim-2.0.0/lib/std/strbasics.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module strbasics", prev: framePtr, filename: "/home/coma/.choosenim/toolchains/nim-2.0.0/lib/std/strbasics.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module unicode", prev: framePtr, filename: "/home/coma/.choosenim/toolchains/nim-2.0.0/lib/pure/unicode.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module unicode", prev: framePtr, filename: "/home/coma/.choosenim/toolchains/nim-2.0.0/lib/pure/unicode.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module strimpl", prev: framePtr, filename: "/home/coma/.choosenim/toolchains/nim-2.0.0/lib/std/private/strimpl.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module strimpl", prev: framePtr, filename: "/home/coma/.choosenim/toolchains/nim-2.0.0/lib/std/private/strimpl.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module strutils", prev: framePtr, filename: "/home/coma/.choosenim/toolchains/nim-2.0.0/lib/pure/strutils.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module strutils", prev: framePtr, filename: "/home/coma/.choosenim/toolchains/nim-2.0.0/lib/pure/strutils.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module httpcore", prev: framePtr, filename: "/home/coma/.choosenim/toolchains/nim-2.0.0/lib/pure/httpcore.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module httpcore", prev: framePtr, filename: "/home/coma/.choosenim/toolchains/nim-2.0.0/lib/pure/httpcore.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsfetch", prev: framePtr, filename: "/home/coma/.choosenim/toolchains/nim-2.0.0/lib/std/jsfetch.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsfetch", prev: framePtr, filename: "/home/coma/.choosenim/toolchains/nim-2.0.0/lib/std/jsfetch.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module htmlgen", prev: framePtr, filename: "/home/coma/.choosenim/toolchains/nim-2.0.0/lib/pure/htmlgen.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module htmlgen", prev: framePtr, filename: "/home/coma/.choosenim/toolchains/nim-2.0.0/lib/pure/htmlgen.nim", line: 0};
framePtr = F;
framePtr = F.prev;

function newSeq_33556919(len_33556921) {
  var result_33556922 = [];

  var F = {procname: "newSeq.newSeq", prev: framePtr, filename: "/home/coma/.choosenim/toolchains/nim-2.0.0/lib/system.nim", line: 0};
  framePtr = F;
    F.line = 635;
    F.filename = "system.nim";
    result_33556922 = new Array(len_33556921); for (var i = 0 ; i < len_33556921 ; ++i) { result_33556922[i] = null; }  framePtr = F.prev;

  return result_33556922;

}

function handler(req_520093707) {
  var result_520093708 = null;

  var F = {procname: "handler.handler", prev: framePtr, filename: "/home/coma/ghq/github.com/Comamoca/sandbox/workers-nim/src/handler.nim", line: 0};
  framePtr = F;
  BeforeRet: {
    F.line = 20;
    F.filename = "handler.nim";
    var stylesheet_520093709 = [115,116,121,108,101,115,104,101,101,116];
    F.line = 22;
    var html_520093755 = ([60,104,116,109,108,62,60,104,101,97,100,62,60,108,105,110,107,32,114,101,108,61,34] || []).concat(stylesheet_520093709 || [],makeNimstrLit("\" href=\"https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/tokyo-night-dark.min.css\" /><link rel=\"") || [],stylesheet_520093709 || [],makeNimstrLit("\" href=\"https://unpkg.com/mvp.css\" /><script src=\"https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js\"></script><script src=\"https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/languages/nim.min.js\"></script><script>hljs.highlightAll();</script></head><div><section><h1>Hello!</h1></section><section>This worker handler writtern by <a href=\"https://nim-lang.org\">Nim</a>!</section><section>Handler source code is berow!</section><section><pre><code>import jsffi\x0Aimport std/jsfetch\x0Aimport htmlgen\x0A\x0Aconst code = staticRead \"./handler.nim\"\x0A\x0A{.emit: \"\"\"\x0Afunction HtmlResponse(body) {\x0A  return new Response(body, {headers: { \'content-type\': \'text/html;charset=UTF-8\', }})\x0A}\x0A\"\"\".}\x0A\x0Afunc HtmlResponse(body: cstring): Response {.importjs: \"HtmlResponse(#)\".}\x0A\x0Afunc consoleLog(exp: auto) {.importjs: \"console.log(#)\".}\x0A\x0Aproc handler(req: Request): Response {.exportc.} =\x0A  # consoleLog req\x0A\x0A  let stylesheet = \"stylesheet\"\x0A\x0A  let html = html(\x0A  head(\x0A      link(rel = stylesheet, href = \"https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/tokyo-night-dark.min.css\"),\x0A      link(rel = stylesheet, href = \"https://unpkg.com/mvp.css\"),\x0A      script(src = \"https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js\"),\x0A      script(src = \"https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/languages/nim.min.js\"),\x0A      script(\"hljs.highlightAll();\"),\x0A    ),\x0A    `div`(\x0A    section(h1(\"Hello!\")),\x0A    section(\"This worker handler writtern by \", a(href = \"https://nim-lang.org\", \"Nim\"), \"!\"),\x0A    section(\"Handler source code is berow!\"),\x0A    section(pre(code(code))))\x0A  )\x0A\x0A  let resp = HtmlResponse(cstring(html))\x0A\x0A  return resp\x0A\x0A{.emit: \"export { handler }\".}\x0A</code></pre></section></div></html>") || []);
    F.line = 37;
    var resp_520093756 = HtmlResponse(toJSStr(html_520093755));
    F.line = 39;
    result_520093708 = resp_520093756;
    break BeforeRet;
  };
  framePtr = F.prev;

  return result_520093708;

}
var F = {procname: "module handler", prev: framePtr, filename: "/home/coma/ghq/github.com/Comamoca/sandbox/workers-nim/src/handler.nim", line: 0};
framePtr = F;
F.line = 7;
F.filename = "handler.nim";
function HtmlResponse(body) {
  return new Response(body, {headers: { 'content-type': 'text/html;charset=UTF-8', }})
}

F.line = 41;
export { handler }
framePtr = F.prev;
var F = {procname: "module handler", prev: framePtr, filename: "/home/coma/ghq/github.com/Comamoca/sandbox/workers-nim/src/handler.nim", line: 0};
framePtr = F;
framePtr = F.prev;
