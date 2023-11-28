import * as url from "url";
import { createModule, gql } from "graphql-modules";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

export const mainModule = createModule({
  id: "main-module",
  dirname: __dirname,
  typeDefs: [
    gql`
      input PrismaQueryOptions {
        skip: Int
        take: Int
      }

      type Query
    `,
  ],
  resolvers: {
    Query: {},
  },
});
