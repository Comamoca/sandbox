import { Denops, ensure, execute, is } from "../../deps.ts";

export async function main(denops: Denops): Promise<void> {
  // ここにプラグインの処理を記載する
  console.log("Hello Denops!");

  denops.dispatcher = {
    async echo(text: unknown): Promise<unknown> {
      ensure(text, is.String);
      return await Promise.resolve(text);
    },
  };

  await execute(
    denops,
    `command! -nargs=1 HelloWorldEcho echomsg denops#request('${denops.name}', 'echo', [<q-args>])`,
  );
}
