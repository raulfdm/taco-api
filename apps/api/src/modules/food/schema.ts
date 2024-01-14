import type { Prisma } from "@prisma/client";
import { createModule } from "graphql-modules";

import { getPrismaClient } from "../../infrastructure/primaClient";
import { typeDefs } from "./typeDef";

export const foodModule = createModule({
  id: "food-module",
  dirname: import.meta.dir,
  typeDefs: typeDefs,
  resolvers: {
    Query: {
      getAllFood: async (
        _: unknown,
        { opts }: { opts: Pick<Prisma.FoodFindManyArgs, "skip" | "take"> },
      ) => {
        return getPrismaClient().food.findMany({
          ...opts,
          include: {
            category: true,
            nutrients: true,
            aminoAcids: true,
            fattyAcids: true,
          },
        });
      },
      getFoodById: async (_: unknown, { id }: { id: number }) => {
        return getPrismaClient().food.findUnique({
          where: {
            id,
          },
          include: {
            category: true,
            nutrients: true,
            aminoAcids: true,
            fattyAcids: true,
          },
        });
      },
      getFoodByName: async (_: unknown, { name }: { name: string }) => {
        return getPrismaClient().food.findMany({
          where: {
            name: {
              contains: name,
            },
          },
          include: {
            category: true,
            nutrients: true,
            aminoAcids: true,
            fattyAcids: true,
          },
        });
      },
    },
  },
});
