import {
  basename,
  dirname,
  join,
} from "https://deno.land/std@0.203.0/path/mod.ts";
import {
  ensureDir,
  exists,
  WalkEntry,
} from "https://deno.land/std@0.204.0/fs/mod.ts";
import Layout from "./layout/Layout.tsx";
import { renderSSR } from "nano-jsx";
import { collect } from "./collect.ts";
import { globToRegExp } from "https://deno.land/std@0.203.0/path/glob.ts";
import { relative } from "https://deno.land/std@0.203.0/path/relative.ts";

const outdir = "./_dist/";

const target_jsx = await collect(
  ["**/index.tsx", "**/index.jsx"].map((glob) => globToRegExp(glob)),
);

target_jsx.forEach(async (jsx_entry) => {
  const mod = await import(jsx_entry.path);

  if (mod.default != undefined) {
    console.log(jsx_entry);

    const save_filename = (entry: WalkEntry) => {
      console.log("to save ", relative(Deno.cwd(), entry.path));

      return relative(Deno.cwd(), entry.path).replace(".jsx", ".html").replace(
        ".tsx",
        ".html",
      );
    };

    const filename = save_filename(jsx_entry);
    const parent = join(outdir, dirname(filename));

    if (!(await exists(parent))) {
      await ensureDir(parent);
    }

    console.log("simple_filename", filename);

    console.log(
      join(relative(Deno.cwd(), jsx_entry.path), jsx_entry.name),
      renderSSR(() => <Layout title="Site title">{mod.default}</Layout>),
    );

    await Deno.writeTextFile(
      join(outdir, filename),
      `<!DOCTYPE html>
      <head>
      </head>
    <html lang="ja">
    ${renderSSR(() => <Layout title="Site title">{mod.default}</Layout>)}
    </html>`,
    );
  }
});
