import { cors } from "@elysiajs/cors";
import { yoga } from "@elysiajs/graphql-yoga";
import { useGraphQLModules } from "@envelop/graphql-modules";
import { Elysia } from "elysia";

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

const application = createApplication({
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

new Elysia()
  .use(cors())
  .use(
    yoga({
      typeDefs: application.typeDefs,
      plugins: [useGraphQLModules(application)],
      /**
       * There's some type difference between those libraries but it's integrating
       * as expected.
       *
       * To see the Yoga API we need to remove the `as any`.
       */
      // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    } as any),
  )
  .listen(env.PORT, ({ port }) => {
    console.log(`🚀 Server ready at http://localhost:${port}`);
  });
