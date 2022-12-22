import { build, stop } from "https://deno.land/x/esbuild@v0.15.11/mod.js";
// import { httpImports } from "https://deno.land/x/esbuild_plugin_http_imports@v1.2.4/index.ts";
import { cache } from "https://deno.land/x/esbuild_plugin_cache@v0.2.8/mod.ts";

const importmap = {
  imports: {
    "three/": "https://deno.land/x/threejs_4_deno@v121/"
  },
}

await build({
   minify: true,
   entryPoints: ['index.js'],
   bundle: true,
   outfile: 'main.js',
   plugins: [cache({importmap, directory: './cache'})],
});

stop();
