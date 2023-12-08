import * as url from "url";
import { createModule } from "graphql-modules";

import { typeDefs } from "./typeDef";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

export const fattyAcidModule = createModule({
  id: "fatty-acid-module",
  dirname: __dirname,
  typeDefs: typeDefs,
});
