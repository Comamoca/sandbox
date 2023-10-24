export interface Profile {
  "display_name": string;
  "external_urls": {
    "spotify": `https://open.spotify.com/user/${string}`;
  };
  "href": `https://api.spotify.com/${string}`;
  "id": string;
  "images": [];
  "type": UserType;
  "uri": SpotifyURI;
  "followers": {
    "href": string | null;
    "total": number;
  };
}

type UserType = "user";

type SpotifyURI = `${"spotify"}:${"user"}:${string}`;
