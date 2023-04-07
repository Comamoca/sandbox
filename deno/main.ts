import { Marked } from "https://deno.land/x/markdown@v2.0.0/mod.ts";
import { serve } from "https://deno.land/std@0.53.0/http/server.ts";

const result = await Deno.readFile("deno.md");

const dec = new TextDecoder("utf-8");
const text = dec.decode(result);
// console.log(text);

const html = Marked.parse(text).content;

console.log(html);

const s = serve({ port: 8000 });

const tmpl = `
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Deno markdown SSR</title>
</head>
<body>
${html}
</body>
</html>
`;

for await (const req of s) {
	req.respond({ body: tmpl });
}
