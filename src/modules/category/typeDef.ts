import { gql } from "graphql-modules";

const categoryTypeDef = gql`
  type Category {
    id: Int!
    name: String!
    foods: [Food]!
  }
`;

const queryTypeDef = gql`
  extend type Query {
    getAllCategories: [Category]!
    getCategoryById(id: Int!): Category
  }
`;

export const typeDefs = [categoryTypeDef, queryTypeDef];
