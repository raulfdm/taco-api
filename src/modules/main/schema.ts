import { createModule, gql } from "graphql-modules";
import * as url from "url";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

export const mainModule = createModule({
  id: "main-module",
  dirname: __dirname,
  typeDefs: [
    gql`
      type Query
    `,
  ],
  resolvers: {
    Query: {},
  },
});
