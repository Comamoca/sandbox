import { underline } from "https://deno.land/std@0.201.0/fmt/colors.ts";
import { collect } from "./collect.ts";
import { create_post } from "./markdown.ts";
import { globToRegExp } from "https://deno.land/std@0.203.0/path/glob.ts";

const target_globs = [
  "**/index.tsx",
  "**/index.jsx",
];

const jsx_entries = await collect(
  target_globs.map((glob) => globToRegExp(glob)),
);

console.log(jsx_entries);

const pages = await Promise.all(
  jsx_entries.map((entry) => import(entry.path)),
);

console.log(pages);
