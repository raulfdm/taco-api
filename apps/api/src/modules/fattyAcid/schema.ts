import { createModule } from "graphql-modules";

import { typeDefs } from "./typeDef";

export const fattyAcidModule = createModule({
  id: "fatty-acid-module",
  dirname: import.meta.dir,
  typeDefs: typeDefs,
});
