import { copy } from "https://deno.land/std@0.137.0/streams/mod.ts";

const listener = Deno.listen({ port: 8000 });

const decoder = new TextDecoder();
const encoder = new TextEncoder();

console.log("listening on 0.0.0.0:8000");
for await (const conn of listener) {
  const data = await conn.readable.getReader().read()
  const json = JSON.parse(decoder.decode(data.value))
  const id = json[0]

  console.log(json)
  console.log(json[1].vim)

  await conn.writable.getWriter().write(encoder.encode(JSON.stringify([id, {"server": "Hello!"}])))
}
