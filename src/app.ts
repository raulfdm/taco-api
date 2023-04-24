import * as dotenv from "dotenv";
import express from "express";
import { graphqlHTTP } from "express-graphql";
import { createApplication } from "graphql-modules";

import {
  mainModule,
  unitModule,
  foodModule,
  categoryModule,
  aminoAcidModules,
} from "@/modules";

dotenv.config();

const app = express();

const api = createApplication({
  modules: [
    mainModule,
    unitModule,
    foodModule,
    categoryModule,
    aminoAcidModules,
  ],
});

const port = 4004;

app.use(
  "/graphql",
  graphqlHTTP({
    schema: api.schema,
    customExecuteFn: api.createExecution(),
    graphiql: true,
  })
);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
