import { createModule } from "graphql-modules";

import { getPrismaClient } from "../../infrastructure/primaClient";
import { typeDefs } from "./typeDefs";

export const unitModule = createModule({
  id: "unit-module",
  dirname: import.meta.dir,
  typeDefs,
  resolvers: {
    Query: {
      getUnits: async () => {
        return await getPrismaClient().unit.findMany();
      },
      getUnitByFieldName: async (
        _: unknown,
        { fieldName }: { fieldName: string },
      ) => {
        return await getPrismaClient().unit.findFirst({
          where: {
            fieldName,
          },
        });
      },
    },
  },
});
