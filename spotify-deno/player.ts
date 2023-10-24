export interface Device {
  "id": string;
  "is_active": boolean;
  "is_private_session": boolean;
  "is_restricted": boolean;
  // device name
  "name": StringConstructor;
  "type": DeviceType;
  "volume_percent": number;
  "supports_volume": boolean;
}

type DeviceType = "Computer";

export type RepeatState = "context";

type ContextType = "playlist";

export interface Context {
  "type": ContextType;
  // url
  "href": string;
  "external_urls": {
    // url
    "spotify": string;
  };
  // "spotify:playlist:448xXZK22h8g5HqwH4uIUL"
  "uri": string;
}

export interface Image {
  // url
  "url": string;
  "height": number;
  "width": number;
}

export type AlbumType = "compilation";

export interface Album {
  "album_type": AlbumType;
  "total_tracks": number;
  "external_urls": {
    // url
    "spotify": string;
  };
  // url
  "href": string;
  "id": string;
  "images": Image[];
  "name": string;
  // date: "2015-01-21"
  "release_date": string;
  // "day"
  "release_date_precision": string;
  "type": AlbumType;
  //  "spotify:album:36GVSCiTkbzjWycetm9GNb"
  "uri": string;
  "artists": Artist[];
  "is_playable": true;
}

export type ArtistType = "artist";

export interface Artist {
  "external_urls": {
    // url
    "spotify": string;
  };
  // url
  "href": string;
  "id": string;
  "name": string;
  "type": ArtistType;
  // "spotify:artist:3qkXtE3XETewbseP4v4n6g"
  "uri": string;
}

export interface Item {
  "album": Album;
  "artists": Artist[];
  "disc_number": number;
  "duration_ms": number;
  "explicit": boolean;
  "external_ids": {
    "isrc": "JPCO01310030";
  };
  "external_urls": {
    // url
    "spotify": string;
  };
  // url
  "href": string;
  "id": string;
  "is_playable": boolean;
  "name": string;
  "popularity": number;
  // url
  "preview_url": string;
  "track_number": number;
  "type": Tracktype;
  //  "spotify:track:1cQ5i3rVqOTgzyFnk8QeKv"
  "uri": string;
  "is_local": boolean;
}

export type Tracktype = "track";

export type CurrentlyPlayingType = "track";

export interface Action {
  "disallows": {
    "resuming": true;
  };
}

export interface Player {
  "device": Device;
  "repeat_state": RepeatState;
  "shuffle_state": boolean;
  "context": Context;
  "timestamp": number;
  "progress_ms": number;
  "is_playing": boolean;
  "item": Item;
  "currently_playing_type": CurrentlyPlayingType;
  "actions": Action;
}
