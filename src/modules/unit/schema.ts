import { createModule, gql } from "graphql-modules";
import * as url from "url";

import { getPrismaClient } from "../../infrastructure/primaClient";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

export const unitModule = createModule({
  id: "unit-module",
  dirname: __dirname,
  typeDefs: [
    gql`
      type Unit {
        id: Int!
        fieldName: String!
        unit: String!
        labelPt: String!
        infoodsTagname: String
        systematicName: String
        commonName: String
      }

      extend type Query {
        getUnits: [Unit]!
      }
    `,
  ],
  resolvers: {
    Query: {
      getUnits: async () => {
        return await getPrismaClient().unit.findMany();
      },
    },
  },
});
