import { $ } from "https://deno.land/x/dax@0.35.0/mod.ts";
import { serveDir } from "https://deno.land/std@0.203.0/http/file_server.ts";

const watch = async () => {
  const watcher = Deno.watchFs("./_dist/");
  for await (const event of watcher) {
    console.log(">>>> event", event);
    await $`deno run -A ./render.tsx`;
  }
};
