import { assertEquals } from "jsr:@std/assert";
import jwt from "npm:jsonwebtoken";

const url = new URL("http://localhost:8000");

Deno.test("check /", async () => {
  const resp = await fetch(url);

  assertEquals(resp.status, 200);

  await resp.body?.cancel();
});

Deno.test("check /auth", async () => {
  const token = jwt.sign({ foo: "hello" }, "secret");
  const resp = await fetch(new URL("/auth", url.href), {
    headers: {
      "Authorization": token,
    },
  });

  assertEquals(resp.status, 200);

  await resp.body?.cancel();
});

Deno.test("check /auth 401", async () => {
  const resp = await fetch(new URL("/auth", url.href));

  assertEquals(resp.status, 401);

  await resp.body?.cancel();
});

Deno.test("check 404", async () => {
  const resp = await fetch(new URL("not_found_url", url.href));

  assertEquals(resp.status, 404);

  await resp.body?.cancel();
});
