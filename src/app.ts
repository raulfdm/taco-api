import cors from 'cors';
import * as dotenv from 'dotenv';
import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { createApplication } from 'graphql-modules';

import { env } from '@/infrastructure/env';
import {
  aminoAcidModules,
  categoryModule,
  fattyAcidModule,
  foodModule,
  mainModule,
  nutrientModule,
  unitModule,
} from '@/modules';

dotenv.config();

const app = express();

const api = createApplication({
  modules: [
    mainModule,
    unitModule,
    foodModule,
    categoryModule,
    aminoAcidModules,
    fattyAcidModule,
    nutrientModule,
  ],
});

app.use(cors());

app.use(
  '/graphql',
  graphqlHTTP({
    schema: api.schema,
    customExecuteFn: api.createExecution(),
    graphiql: true,
  })
);

app.listen(env.PORT, () =>
  console.log(`Example app listening on port ${env.PORT}!`)
);
