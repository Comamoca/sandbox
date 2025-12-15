import type { Entrypoint } from "../../deps.ts";
import { Hono } from "../../deps.ts"

let server: Deno.HttpServer | null = null;

export const main: Entrypoint = (denops) => {
  denops.dispatcher = {
    async init() {
      const { name } = denops;

      await denops.cmd(
        `command! LaunchServer call denops#request('${name}', 'launchServer', [])`,
      );

      await denops.cmd(
        `command! StopServer call denops#request('${name}', 'stopServer', [])`,
      );
    },
    async launchServer() {
      const app = new Hono()
      app.get('/', (c) => c.text('Hono!'))
      await denops.cmd(`echomsg "Server start: http://localhost:8000"`);

      server = Deno.serve(app.fetch)
    },

    async stopServer() {
      if (!server) {
        await denops.cmd(`echomsg "Server not running"`);
        return;
      }

      await server.shutdown();
      server = null;
      
      await denops.cmd(`echomsg "Server was shutdown!"`);
    }
  };
};
