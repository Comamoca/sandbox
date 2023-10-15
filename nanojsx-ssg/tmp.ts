import {
  basename,
  dirname,
  extname,
  join,
  relative,
} from "https://deno.land/std@0.203.0/path/mod.ts";

const project_root = Deno.cwd();
const target =
  "/home/coma/ghq/github.com/Comamoca/sandbox/nanojsx-ssg/index.tsx";

const blog =
  "/home/coma/ghq/github.com/Comamoca/sandbox/nanojsx-ssg/blog/index.tsx";

const outdir = "./_dist";

console.log(project_root);
console.log(target);

console.log(
  relative(
    project_root,
    blog,
  ),
);

console.log(join(
  outdir,
  relative(
    project_root,
    target,
  ),
));
console.log(join(
  outdir,
  relative(
    project_root,
    blog,
  ),
));
