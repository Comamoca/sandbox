import { Artist, Player } from "./player.ts";
import { fetchWebApi } from "./functions.ts";
import * as endpoint from "./endpoints.ts";

// const token =
//   "BQDfK3lkje8mgJkEJ0orK_ePTcgkv63XNbNI-hJBBNMm5I2VAr7YSJso3b2yJEdLjXZRkzOSgxb_PcKIHib9ClKFZYdQ48GxbwmUX_Ch0SXzVXw_OXwnZLO-2IMBluRgvBrrwlBkGU-smMcMGIegg_gt06Zy7Y15kKHVvZZ2Ep8pH5KrfZpiYXZJOklOVtcGDmqMdXq49koN8zBH5xGgGPUZAzhrUs0tyYM78f4dJON38U0NRMKzxdV9Br2Ot1Qw13I2mDqJdiWDGMeppDoqhSgniHfl";

const token =
  "BQBw5iSHHTCbMupMxI61V9Uy2pmgqFr6cmX8--sUzN4dTG_JfSfg5a2BKf0jQO9mILCJc1EAU9KXy47L_VcsWnEftSvxZq5S0VdZZDwSogWrJRweB13sL_niZ0KQ4sQR2MaXrbBreVV7yM5aSCcBejDkVS5ma5TqOTVNLNK6yQJ-OUKKn1Halc8T66NhzDi3KKj-0SbKgvHJZTvl-1s";

async function player_toggle(token: string) {
  const res = await fetchWebApi(token, endpoint.player, "GET");

  console.log(res.status);

  console.log(await res.text());

  const player: Player = await res.json();

  console.log(player);

  if (player.is_playing) {
    // console.log(player.item.name);
    // console.log(
    //   player.item.artists.map((artist: Artist) => artist.name).join(" "),
    // );

    await fetchWebApi(token, endpoint.pause, "PUT");
    // console.log(r.status);
  } else {
    // console.log("Player is stopped.");

    await fetchWebApi(token, "v1/me/player/play", "PUT");

    // console.log(res.status);
    // console.log(res.body);
  }
}

await player_toggle(token);
