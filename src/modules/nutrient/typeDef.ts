import { gql } from "graphql-modules";

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

export const typeDefs = [nutrientTypeDef];
