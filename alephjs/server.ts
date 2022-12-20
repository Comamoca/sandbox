import { serve } from "aleph/react-server";
import routes from "./routes/_export.ts";

serve({
  router: { routes },
  ssr: true,
});
