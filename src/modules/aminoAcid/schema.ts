import { createModule } from "graphql-modules";
import * as url from "url";

import { typeDefs } from "./typeDef";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

export const aminoAcidModules = createModule({
  id: "amino-acid-module",
  dirname: __dirname,
  typeDefs: typeDefs,
});
