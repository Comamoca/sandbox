import { WalkEntry } from "https://deno.land/std@0.203.0/fs/walk.ts";

export interface Post {
  attr: Record<string, unknown>;
  entry: WalkEntry;
  body: string;
}
