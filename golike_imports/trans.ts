import esprisma from "https://esm.sh/esprima@4.0.1";
import escodegen from "https://esm.sh/escodegen@2.1.0";
import { transpile } from "https://deno.land/x/emit@0.31.1/mod.ts";
import { basename } from "https://deno.land/std@0.186.0/path/win32.ts";

const isUpperCase = (str: string) => {
  return /^[A-Z]+$/g.test(str);
};

const target = Deno.args[0];

const url = new URL(target, import.meta.url);
const result = await transpile(url);

const prog = result.get(url.href);
const tree = esprisma.parseModule(prog);

tree.body.forEach((item) => {
  // console.log(isUpperCase(item.id?.name[0]));

  if (item.type == "FunctionDeclaration" && isUpperCase(item.id?.name[0])) {
    const p = structuredClone(item);
    // console.log(item.id?.name[0]);
    item.declaration = structuredClone(item);

    item.type = "ExportNamedDeclaration";

    delete item.id;
    delete item.params;
    delete item.body;
    delete item.generator;
    delete item.expression;
    delete item.async;
  }
});

const transed = escodegen.generate(tree);

Deno.writeTextFile(`transed_${basename(url.pathname)}`, transed);
