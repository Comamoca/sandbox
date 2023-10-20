import { walk } from "https://deno.land/std@0.203.0/fs/walk.ts";
import { collect } from "./collect.ts";
import { create_post } from "./markdown.ts";
import { Post } from "./post.ts";
import { WalkEntry } from "https://deno.land/std@0.204.0/fs/mod.ts";
import { globToRegExp } from "https://deno.land/std@0.204.0/path/mod.ts";

async function md_files(): Promise<Promise<Post>[]> {
  const md_entries = await collect(
    ["**/blog/*.md"].map((glob) => globToRegExp(glob)),
  );

  const md = md_entries.map(async (md: WalkEntry) => await create_post(md));

  return md;
}

const result = await Promise.all(await md_files());
console.log(result);
