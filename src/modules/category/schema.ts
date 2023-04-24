import { createModule } from "graphql-modules";
import * as url from "url";

import { getPrismaClient } from "../../infrastructure/primaClient";
import { typeDefs } from "./typeDef";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

export const categoryModule = createModule({
  id: "category-module",
  dirname: __dirname,
  typeDefs: typeDefs,
  resolvers: {
    Query: {
      getAllCategories: async () => {
        return await getPrismaClient().category.findMany({
          include: {
            foods: true,
          },
        });
      },
      getCategoryById: async (_: any, { id }: { id: number }) => {
        return await getPrismaClient().category.findUnique({
          where: {
            id,
          },
          include: {
            foods: {},
          },
        });
      },
    },
  },
});
