import { Context, Hono } from "https://deno.land/x/hono@v3.3.0/mod.ts";

const app = new Hono();

app.get("/", (c: Context) => {
  return c.text(String(c.req.query()));
});

app.post("/", async (c: Context) => {
  console.log(c.req.headers);
  console.log(c.req.query());
  console.log(c.req.param());
  console.log(await c.req.text());

  return c.text("ok");
});

Deno.serve(app.fetch);
