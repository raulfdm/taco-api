import type { Prisma } from '@prisma/client';
import { createModule } from 'graphql-modules';
import * as url from 'url';

import { getPrismaClient } from '../../infrastructure/primaClient';
import { typeDefs } from './typeDef';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

export const foodModule = createModule({
  id: 'food-module',
  dirname: __dirname,
  typeDefs: typeDefs,
  resolvers: {
    Query: {
      getAllFood: async (
        _: unknown,
        { opts }: { opts: Pick<Prisma.FoodFindManyArgs, 'skip' | 'take'> }
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
    },
  },
});
