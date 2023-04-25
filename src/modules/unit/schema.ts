import { createModule } from 'graphql-modules';
import * as url from 'url';

import { getPrismaClient } from '../../infrastructure/primaClient';
import { typeDefs } from './typeDefs';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

export const unitModule = createModule({
  id: 'unit-module',
  dirname: __dirname,
  typeDefs,
  resolvers: {
    Query: {
      getUnits: async () => {
        return await getPrismaClient().unit.findMany();
      },
      getUnitByFieldName: async (
        _: unknown,
        { fieldName }: { fieldName: string }
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
