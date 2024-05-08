import { generateULID } from "@yi/ulid";
import { ulid } from "@std/ulid";

Deno.bench("@yi/ulid", () => {
  const _ulid = generateULID();
});

Deno.bench("@std/ulid", () => {
  const _ulid = ulid();
});
