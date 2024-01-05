const decoder = new TextDecoder();
const encoder = new TextEncoder();

for await (const chunk of Deno.stdin.readable) {
  const text = decoder.decode(chunk)
  const expr = JSON.parse(text)

  console.log(expr)

  const id = expr[0]

  console.log(JSON.stringify([id, {"server": 148}]))
  // console.log(JSON.stringify(["ex", "echo 'hi'"]))
}
