import { KVNamespace } from "workers-types";
import { Hono } from "hono";

type Bindings = {
  MY_KV: KVNamespace;
};

const app = new Hono<{ Bindings: Bindings }>();

app.get("/", (ctx) => ctx.text("Hello!"));

app.get("/greet/:name", (ctx) => {
  const name = ctx.req.param("name");
  return ctx.text(`Hello! ${name}!`);
});

app.get("/kv/get/:key", async (ctx) => {
  const key = ctx.req.param("key");

  console.log(`Key: ${key}`);

  const value = await ctx.env.MY_KV.get(key);

  return ctx.text(`Value: ${value}`);
});

app.get("/kv/set/:key/:value", async (ctx) => {
  const key = ctx.req.param("key");
  const value = ctx.req.param("value");

  console.log(`Key: ${key}, Value: ${value}`);

  await ctx.env.MY_KV.put(key, value);

  return ctx.text("Ok");
});

export default app;
