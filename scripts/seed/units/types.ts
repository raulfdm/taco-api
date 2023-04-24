import { AminoAcid, FattyAcid, Nutrient, Unit } from "@prisma/client";

export type ValidUnit = Omit<Unit, "id"> & {
  fieldName: NutrientKeys | AminoAcidKeys | FattyAcidKeys;
};

type NutrientKeys = keyof Pick<
  Nutrient,
  | "moisture"
  | "kcal"
  | "kJ"
  | "protein"
  | "lipids"
  | "cholesterol"
  | "carbohydrates"
  | "dietaryFiber"
  | "ash"
  | "calcium"
  | "magnesium"
  | "manganese"
  | "phosphorus"
  | "iron"
  | "sodium"
  | "potassium"
  | "copper"
  | "zinc"
  | "retinol"
  | "re"
  | "rae"
  | "thiamin"
  | "riboflavin"
  | "pyridoxine"
  | "niacin"
  | "vitaminC"
>;

type AminoAcidKeys = keyof Pick<
  AminoAcid,
  | "tryptophan"
  | "threonine"
  | "isoleucine"
  | "leucine"
  | "lysine"
  | "methionine"
  | "cystine"
  | "phenylalanine"
  | "tyrosine"
  | "valine"
  | "arginine"
  | "histidine"
  | "alanine"
  | "asparticAcid"
  | "glutamicAcid"
  | "glycine"
  | "proline"
  | "serine"
>;

type FattyAcidKeys = keyof Pick<
  FattyAcid,
  | "saturated"
  | "monounsaturated"
  | "polyunsaturated"
  | "twelveZero"
  | "fourteenZero"
  | "fourteenOne"
  | "sixteenZero"
  | "sixteenOne"
  | "eighteenZero"
  | "eighteenOne"
  | "eighteenOneT"
  | "eighteenTwoN6"
  | "eighteenTwoT"
  | "eighteenThreeN3"
  | "twentyZero"
  | "twentyOne"
  | "twentyFour"
  | "twentyFive"
  | "twentyTwoZero"
  | "twentyTwoFive"
  | "twentyTwoSix"
  | "twentyFourZero"
>;
