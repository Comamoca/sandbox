export interface User {
  display_name: string;
  external_urls: {
    // url string
    spotify: string;
  };
  // url string
  href: string;
  id: string;
  images: [];
  // user type
  type: "user";
  // uri: "spotify:user:31tkpkdg2lkjahtnnj4es4l2fs6q",
  uri: string;
  // { href: null; total: 2 }
  followers: Record<string, unknown>;
}

export interface Tracks {
  // "https://api.spotify.com/v1/me/shows?offset=0&limit=20"
  "href": string;
  "limit": number;
  "next": string;
  "offset": number;
  "previous": string;
  "total": number;
  "items": [];
}

export interface TrackItem {
  "external_urls": {
    "spotify": "string";
  };
  "followers": {
    "href": "string";
    "total": 0;
  };
  "genres": ["Prog rock", "Grunge"];
  "href": "string";
  "id": "string";
  "images": [
    {
      "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228";
      "height": 300;
      "width": 300;
    },
  ];
  "name": "string";
  "popularity": 0;
  "type": "artist";
  "uri": "string";
}
