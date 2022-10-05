import { $ } from "https://deno.land/x/dax@0.12.0/mod.ts";

const codes = ['console.log("Hello!")', 'console.log(1 + 2)']

for (const idx in codes) {
  const cmd = codes[idx]
  console.log(cmd)
  const result = await $`deno eval ${cmd}`.stdout("piped");
  console.log(result.stdout)
}
