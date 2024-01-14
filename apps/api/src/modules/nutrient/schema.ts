import { createModule } from "graphql-modules";

import { typeDefs } from "./typeDef";

export const nutrientModule = createModule({
  id: "nutrient-module",
  dirname: import.meta.dir,
  typeDefs: typeDefs,
});
