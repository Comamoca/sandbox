import { WalkEntry } from "https://deno.land/std@0.204.0/fs/mod.ts";
import { createWalkEntry } from "https://deno.land/std@0.170.0/fs/_util.ts";

const target = "./index.tsx";

const entry: WalkEntry = await createWalkEntry(target);

console.log(entry);
