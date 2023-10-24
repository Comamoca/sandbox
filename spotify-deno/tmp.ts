import { encodeBase64 } from "https://deno.land/std@0.204.0/encoding/base64.ts";
import * as endpoint from "./endpoints.ts";
import { Player } from "./player.ts";
import { Profile } from "./prifile.ts";

import { fetchWebApi } from "./functions.ts";

const state = "fafaoippogaopgnaspofasea".slice(16);
const REDIRECT_URL = "http://localhost:8000/callback";
const scope = ["user-read-playback-state", "user-modify-playback-state"].join(
  " ",
);

const CLIENT_ID = "62a16e2e8de4494ba26868f5e9a9f8eb";
const CLIENT_SECRET = "346fb17b45894c8a9c0ebe2236030571";

const encoded = encodeBase64(`${CLIENT_ID}:${CLIENT_SECRET}`);

const token =
  "BQBw5iSHHTCbMupMxI61V9Uy2pmgqFr6cmX8--sUzN4dTG_JfSfg5a2BKf0jQO9mILCJc1EAU9KXy47L_VcsWnEftSvxZq5S0VdZZDwSogWrJRweB13sL_niZ0KQ4sQR2MaXrbBreVV7yM5aSCcBejDkVS5ma5TqOTVNLNK6yQJ-OUKKn1Halc8T66NhzDi3KKj-0SbKgvHJZTvl-1s";

const res = await fetchWebApi(token, endpoint.me, "GET");

const profile: Profile = await res.json();

console.log(profile.display_name);
console.log(profile.id);
