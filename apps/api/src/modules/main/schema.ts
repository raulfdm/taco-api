import { createModule, gql } from "graphql-modules";

export const mainModule = createModule({
  id: "main-module",
  dirname: import.meta.dir,
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
