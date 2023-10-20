import { WalkEntry } from "https://deno.land/std@0.203.0/fs/walk.ts";

interface Attr {
  title: string;
  tag: string[];
  description: string;
}

export interface Post {
  attr: Attr;
  entry: WalkEntry;
  body: string;
}
