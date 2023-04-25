import { gql } from 'graphql-modules';

const categoryTypeDef = gql`
  type Category {
    id: Int!
    name: String!
    foods: [Food]!
  }
`;

const queryTypeDef = gql`
  input GetCategoryByIdOpts {
    foodFilters: PrismaQueryOptions
  }

  extend type Query {
    getAllCategories(opts: GetCategoryByIdOpts): [Category]!
    getCategoryById(id: Int!, opts: GetCategoryByIdOpts): Category
  }
`;

export const typeDefs = [categoryTypeDef, queryTypeDef];
