import { encodeBase64 } from "https://deno.land/std@0.204.0/encoding/base64.ts";
import { Context, Hono } from "https://deno.land/x/hono@v3.3.0/mod.ts";

const REDIRECT_URL = "http://localhost:8000/callback";

const scope = ["user-read-playback-state", "user-modify-playback-state"].join(
  " ",
);

const CLIENT_ID = "62a16e2e8de4494ba26868f5e9a9f8eb";
const CLIENT_SECRET = "346fb17b45894c8a9c0ebe2236030571";

// TODO 暗号学的に強力な文字列に変更する
const state = "fafaoippogaopgnaspofasea".slice(16);

const encoded = encodeBase64(`${CLIENT_ID}:${CLIENT_SECRET}`);

const app = new Hono();

console.log(new URL(
  `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=code&redirect_uri=${REDIRECT_URL}&scope=${scope}`,
).toString());

app.get("/", (c: Context) => {
  console.log(encoded);

  const url = new URL(
    `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=code&redirect_uri=${REDIRECT_URL}&scope=${scope}`,
  );

  console.log(url.toString());

  return c.redirect(url.toString());
});

app.get("/callback", async (c: Context) => {
  // const code = prompt("code >");

  const code = c.req.query("code");

  console.log(code);

  // tokenをAPIで使えるものに変換する処理
  const token_url = "https://accounts.spotify.com/api/token";

  if (typeof code === "string") {
    const body = new URLSearchParams({
      grant_type: "authorization_code",
      code: code,
      redirect_uri: REDIRECT_URL,
    });

    const resp = await fetch(token_url, {
      headers: {
        "Authorization": `Basic ${encoded}`,
      },
      method: "POST",
      body: body,
    });

    console.log(resp.status);

    const json = await resp.json();

    const kv = await Deno.openKv();
    await kv.set(["token"], json);

    await kv.close();

    return c.json(json);
  }
});

app.get("/refresh", async (c: Context) => {
  const kv = await Deno.openKv();

  const resp = await kv.get(["token"]);
  const json = resp.value;

  await kv.close();

  return c.json(json);
});

Deno.serve(app.fetch);
