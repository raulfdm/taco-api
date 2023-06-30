import { gql } from 'graphql-modules';

const foodTypeDef = gql`
  type Food {
    id: Int!
    name: String!
    category: Category!

    aminoAcids: AminoAcid
    fattyAcids: FattyAcid
    nutrients: Nutrient
  }
`;

const queryTypeDef = gql`
  extend type Query {
    getAllFood(opts: PrismaQueryOptions): [Food]!
    getFoodById(id: Int!): Food
    getFoodByName(name: String!): [Food]!
  }
`;

export const typeDefs = [queryTypeDef, foodTypeDef];
