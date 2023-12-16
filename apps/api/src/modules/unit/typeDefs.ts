import { gql } from "graphql-modules";

const unitTypeDef = gql`
  type Unit {
    id: Int!
    fieldName: String!
    unit: String!
    labelPt: String!
    infoodsTagname: String
    systematicName: String
    commonName: String
  }
`;

const queryTypeDef = gql`
  extend type Query {
    getUnits: [Unit]!
    getUnitByFieldName(fieldName: String!): Unit
  }
`;

export const typeDefs = [queryTypeDef, unitTypeDef];
