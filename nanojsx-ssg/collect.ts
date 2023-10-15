import { globToRegExp } from "https://deno.land/std@0.203.0/path/glob.ts";
import { walk, WalkEntry } from "https://deno.land/std@0.203.0/fs/walk.ts";

const me = new URL(".", import.meta.url);

const jsx_files = [
  "**/*.tsx",
  "**/*.jsx",
];

const omit_files = [
  "**/deno.json",
  "**/deno.jsonc",
  "**/deno.lock",
  "**/render.tsx",
  "**/collect.tsx",
  "**/layout/*.tsx",
  "**/*.md",
].map((glob) => globToRegExp(glob));

// const omit_regexp = jsx_files.map((omit) => globToRegExp(omit));

// console.log(omit_regexp);

export async function collect(glob: RegExp[]): Promise<WalkEntry[]> {
  const files: WalkEntry[] = [];

  for await (const file of walk(me, { match: glob })) {
    files.push(file);
  }

  return files;
}

export async function target_pages(
  omit_regexp: RegExp[],
): Promise<WalkEntry[]> {
  const files = await collect(omit_regexp);

  return files.filter((file) => {
    const match_resut = omit_files.map((omit_file) =>
      omit_file.test(file.path)
    );
    return !(match_resut.includes(true));
  });
}
