import app from "../main.ts";
import { assertEquals } from "@std/assert";

Deno.test("GET /", async () => {
  const resp = await app.request("/");

  assertEquals(resp.status, 200);
  assertEquals(await resp.text(), "Hello!");
});

Deno.test("GET /greet/:name", async () => {
  const resp = await app.request("/greet/arisu");

  assertEquals(resp.status, 200);
  assertEquals(await resp.text(), "Hello! arisu!");
});
