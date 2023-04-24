import { gql } from "graphql-modules";

const aminoAcidTypeDef = gql`
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

export const typeDefs = [aminoAcidTypeDef];
