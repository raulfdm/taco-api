import { gql } from "graphql-modules";

const fattyAcidTypeDef = gql`
  type FattyAcid {
    saturated: Float!
    monounsaturated: Float!
    polyunsaturated: Float!
    twelveZero: Float
    fourteenZero: Float
    fourteenOne: Float
    sixteenZero: Float
    sixteenOne: Float
    eighteenZero: Float
    eighteenOne: Float
    eighteenOneT: Float
    eighteenTwoN6: Float
    eighteenTwoT: Float
    eighteenThreeN3: Float
    twentyZero: Float
    twentyOne: Float
    twentyFour: Float
    twentyFive: Float
    twentyTwoZero: Float
    twentyTwoFive: Float
    twentyTwoSix: Float
    twentyFourZero: Float
  }
`;

const nutrientTypeDef = gql`
  type Nutrient {
    moisture: Float
    kcal: Float
    kJ: Float
    protein: Float
    lipids: Float
    cholesterol: Float
    carbohydrates: Float
    dietaryFiber: Float
    ash: Float
    calcium: Float
    magnesium: Float
    manganese: Float
    phosphorus: Float
    iron: Float
    sodium: Float
    potassium: Float
    copper: Float
    zinc: Float
    retinol: Float
    re: Float
    rae: Float
    thiamin: Float
    riboflavin: Float
    pyridoxine: Float
    niacin: Float
    vitaminC: Float
  }
`;

const categoryTypeDef = gql`
  type Category {
    id: Int!
    name: String!
  }
`;

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
    getAllFood: [Food]!
    getFoodById(id: Int!): Food
  }
`;

export const typeDefs = [
  categoryTypeDef,
  nutrientTypeDef,
  fattyAcidTypeDef,
  queryTypeDef,
  foodTypeDef,
];
