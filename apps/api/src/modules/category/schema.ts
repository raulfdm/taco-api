import type { Prisma } from "@prisma/client";
import { createModule } from "graphql-modules";

import { getPrismaClient } from "../../infrastructure/primaClient";
import { typeDefs } from "./typeDef";

type FoodFilters = Pick<Prisma.FoodFindManyArgs, "skip" | "take">;

export const categoryModule = createModule({
  id: "category-module",
  dirname: import.meta.dir,
  typeDefs: typeDefs,
  resolvers: {
    Query: {
      getAllCategories: async (
        _: unknown,
        { opts }: { opts?: { foodFilters: FoodFilters } },
      ) => {
        return getPrismaClient().category.findMany({
          include: {
            foods: {
              ...opts?.foodFilters,
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
        { id, opts }: { id: number; opts?: { foodFilters: FoodFilters } },
      ) => {
        return getPrismaClient().category.findUnique({
          where: {
            id,
          },
          include: {
            foods: {
              ...opts?.foodFilters,
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
