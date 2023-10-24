const api_ver = "v1";

export namespace Me {
  export const me = [api_ver, "me"].join("/");
  export const player = [me, "player"].join("/");
  export const play = [player, "play"].join("/");
  export const pause = [player, "pause"].join("/");
}

export namespace Users {
  export const users = "users";

  export const top = [api_ver, users].join("/");

  export const playlists = (user_id: string) =>
    [users, user_id, "playlists"].join("/");
}
