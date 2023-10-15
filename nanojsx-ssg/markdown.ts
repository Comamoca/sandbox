// import { globToRegExp } from "https://deno.land/std@0.203.0/path/glob.ts";
// import { collect } from "./collect.ts";
import { WalkEntry } from "https://deno.land/std@0.203.0/fs/walk.ts";
import { extract } from "https://deno.land/std@0.203.0/front_matter/any.ts";
import { Post } from "./post.ts";

export async function create_post(md_entry: WalkEntry): Promise<Post> {
  const md_text = await Deno.readTextFile(md_entry.path);
  const md_info = extract(md_text);

  return {
    attr: md_info.attrs,
    body: md_info.body,
    entry: entry,
  };
}

// const glob_path = [globToRegExp("**/blog/*.md")];
// const md_files = await collect(glob_path);
//
// const post_mds = md_files.map((md_file) => create_post(md_file));
//
// const posts = await Promise.all(post_mds);
// console.log(posts);
