import { encodeBase64 } from "https://deno.land/std@0.204.0/encoding/base64.ts";

// const CLIENT_ID = "fb91a46deb6e4565b7b1103ace87ff4c";
// const CLIENT_SECRET = "8f27f994d08a44c3950b76b49493d8d2";

const CLIENT_ID = "62a16e2e8de4494ba26868f5e9a9f8eb";
const CLIENT_SECRET = "346fb17b45894c8a9c0ebe2236030571";
// const REDIRECT_URL = "https://open.spotify.com/";
const REDIRECT_URL = "http://localhost:8000/callback";

const scope = ["user-read-playback-state", "user-modify-playback-state"].join(
  " ",
);

const url = new URL(
  `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=code&redirect_uri=${REDIRECT_URL}&scope=${scope}`,
);

console.log(url.toString());

console.log(encodeBase64(`${CLIENT_ID}:${CLIENT_SECRET}`));
