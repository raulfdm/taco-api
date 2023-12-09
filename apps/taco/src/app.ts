import cors from "cors";
import express from "express";
import { createHandler } from "graphql-http/lib/use/express";
import { createApplication } from "graphql-modules";

import { env } from "@/infrastructure/env";
import {
  aminoAcidModules,
  categoryModule,
  fattyAcidModule,
  foodModule,
  mainModule,
  nutrientModule,
  unitModule,
} from "@/modules";

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

app.get("/graphiql", async (req, res) => {
  const graphiqlHTMLPath = `${import.meta.dir}/modules/graphiql.html`;

  res.sendFile(graphiqlHTMLPath);
});

app.use(
  "/graphql",
  createHandler({
    schema: api.schema,
    execute: api.createExecution(),
  }),
);

app.listen(env.PORT, () =>
  console.log(
    `TACO GraphQL API listening on http://localhost:${env.PORT}/graphql`,
  ),
);
