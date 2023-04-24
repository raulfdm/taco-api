import { createModule } from "graphql-modules";
import * as url from "url";
import { Prisma } from "@prisma/client";

import { getPrismaClient } from "../../infrastructure/primaClient";
import { typeDefs } from "./typeDef";

type FoodFilters = Pick<Prisma.FoodFindManyArgs, "skip" | "take">;

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

export const categoryModule = createModule({
  id: "category-module",
  dirname: __dirname,
  typeDefs: typeDefs,
  resolvers: {
    Query: {
      getAllCategories: async (
        _: unknown,
        { opts }: { opts: { foodFilters: FoodFilters } }
      ) => {
        return getPrismaClient().category.findMany({
          include: {
            foods: {
              ...opts.foodFilters,
              include: {
                nutrients: true,
                aminoAcids: true,
                category: true,
                fattyAcids: true,
              },
            },
          },
        });
      },
      getCategoryById: async (
        _: unknown,
        { id, opts }: { id: number; opts: { foodFilters: FoodFilters } }
      ) => {
        return getPrismaClient().category.findUnique({
          where: {
            id,
          },
          include: {
            foods: {
              ...opts.foodFilters,
              include: {
                nutrients: true,
                aminoAcids: true,
                category: true,
                fattyAcids: true,
              },
            },
          },
        });
      },
    },
  },
});
