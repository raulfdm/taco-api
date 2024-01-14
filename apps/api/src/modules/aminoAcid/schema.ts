import { createModule } from "graphql-modules";

import { typeDefs } from "./typeDef";

export const aminoAcidModules = createModule({
  id: "amino-acid-module",
  dirname: import.meta.dir,
  typeDefs: typeDefs,
});
