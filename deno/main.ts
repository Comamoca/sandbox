import { Marked } from "https://deno.land/x/markdown@v2.0.0/mod.ts";
import { serve } from "https://deno.land/std@0.53.0/http/server.ts";

const result = await Deno.readFile("deno.md");

const dec = new TextDecoder("utf-8");
const text = dec.decode(result);
// console.log(text);

const html = Marked.parse(text).content

console.log(html)

const s = serve({ port: 8000 });

const meta = '<meta charset="UTF-8">'

for await (const req of s) {
  req.respond({ body: meta + html });
}
