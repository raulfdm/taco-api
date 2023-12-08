import type { ValidUnit } from "./types";

type PartialUnit = Pick<ValidUnit, "fieldName" | "unit" | "labelPt"> &
  Partial<Pick<ValidUnit, "infoodsTagname" | "systematicName" | "commonName">>;

function createUnit(unit: PartialUnit): ValidUnit {
  const nextUnit = {
    ...unit,
    infoodsTagname: null,
    systematicName: null,
    commonName: null,
  } satisfies ValidUnit;

  return nextUnit;
}

export const unitsToSave = [
  createUnit({
    fieldName: "moisture",
    unit: "%",
    labelPt: "Umidade",
    infoodsTagname: "WATER",
  }),
  createUnit({
    fieldName: "kcal",
    unit: "kcal",
    labelPt: "Energia",
    infoodsTagname: "ENERC",
  }),
  createUnit({
    fieldName: "kJ",
    unit: "kj",
    labelPt: "Energia",
    infoodsTagname: "ENERC",
  }),
  createUnit({
    fieldName: "protein",
    unit: "g",
    labelPt: "Proteína",
    infoodsTagname: "PROCNT",
  }),
  createUnit({
    fieldName: "lipids",
    unit: "g",
    labelPt: "Lipídeos",
    infoodsTagname: "FAT",
  }),
  createUnit({
    fieldName: "cholesterol",
    unit: "mg",
    labelPt: "Colesterol",
    infoodsTagname: "CHOLE",
  }),
  createUnit({
    fieldName: "carbohydrates",
    unit: "g",
    labelPt: "Carboidrato",
    infoodsTagname: "CHOCDF",
  }),
  createUnit({
    fieldName: "dietaryFiber",
    unit: "g",
    labelPt: "Fibra Alimentar",
    infoodsTagname: "FIBTG",
  }),
  createUnit({
    fieldName: "ash",
    unit: "g",
    labelPt: "Cinzas",
    infoodsTagname: "ASH",
  }),
  createUnit({
    fieldName: "calcium",
    unit: "mg",
    labelPt: "Cálcio",
    infoodsTagname: "CA",
  }),
  createUnit({
    fieldName: "magnesium",
    unit: "mg",
    labelPt: "Magnésio",
    infoodsTagname: "MG",
  }),
  createUnit({
    fieldName: "manganese",
    unit: "mg",
    labelPt: "Manganês",
    infoodsTagname: "MN",
  }),
  createUnit({
    fieldName: "phosphorus",
    unit: "mg",
    labelPt: "Fósforo",
    infoodsTagname: "P",
  }),
  createUnit({
    fieldName: "iron",
    unit: "mg",
    labelPt: "Ferro",
    infoodsTagname: "FE",
  }),
  createUnit({
    fieldName: "sodium",
    unit: "mg",
    labelPt: "Sódio",
    infoodsTagname: "NA",
  }),
  createUnit({
    fieldName: "potassium",
    unit: "mg",
    labelPt: "Potássio",
    infoodsTagname: "K",
  }),
  createUnit({
    fieldName: "copper",
    unit: "mg",
    labelPt: "Cobre",
    infoodsTagname: "CU",
  }),
  createUnit({
    fieldName: "zinc",
    unit: "mg",
    labelPt: "Zinco",
    infoodsTagname: "ZN",
  }),
  createUnit({
    fieldName: "retinol",
    unit: "μg",
    labelPt: "Retinol",
    infoodsTagname: "RETOL",
  }),
  createUnit({
    fieldName: "re",
    unit: "μg",
    labelPt: "RE",
    infoodsTagname: "VITA",
  }),
  createUnit({
    fieldName: "rae",
    unit: "μg",
    labelPt: "RAE",
    infoodsTagname: "VITA",
  }),
  createUnit({
    fieldName: "thiamin",
    unit: "mg",
    labelPt: "Tiamina",
    infoodsTagname: "THIA",
  }),
  createUnit({
    fieldName: "riboflavin",
    unit: "mg",
    labelPt: "Riboflavina",
    infoodsTagname: "RIFB",
  }),
  createUnit({
    fieldName: "pyridoxine",
    unit: "mg",
    labelPt: "Piridoxina",
  }),
  createUnit({
    fieldName: "niacin",
    unit: "mg",
    labelPt: "Niacina",
    infoodsTagname: "NIA",
  }),
  createUnit({
    fieldName: "vitaminC",
    unit: "mg",
    labelPt: "Vitamina C",
    infoodsTagname: "VITC",
  }),
  createUnit({
    fieldName: "tryptophan",
    unit: "g",
    labelPt: "Triptofano",
    infoodsTagname: "TRP G",
  }),
  createUnit({
    fieldName: "threonine",
    unit: "g",
    labelPt: "Treonina",
    infoodsTagname: "THR G",
  }),
  createUnit({
    fieldName: "isoleucine",
    unit: "g",
    labelPt: "Isoleucina",
    infoodsTagname: "LE_G",
  }),
  createUnit({
    fieldName: "leucine",
    unit: "g",
    labelPt: "Leucina",
    infoodsTagname: "LEU G",
  }),
  createUnit({
    fieldName: "lysine",
    unit: "g",
    labelPt: "Lisina",
    infoodsTagname: "LYS G",
  }),
  createUnit({
    fieldName: "methionine",
    unit: "g",
    labelPt: "Metionina",
    infoodsTagname: "MET G",
  }),
  createUnit({
    fieldName: "cystine",
    unit: "g",
    labelPt: "Cistina",
    infoodsTagname: "CYS G",
  }),
  createUnit({
    fieldName: "phenylalanine",
    unit: "g",
    labelPt: "Fenilalanina",
    infoodsTagname: "PHE G",
  }),
  createUnit({
    fieldName: "tyrosine",
    unit: "g",
    labelPt: "Tirosina",
    infoodsTagname: "TYR G",
  }),
  createUnit({
    fieldName: "valine",
    unit: "g",
    labelPt: "Valina",
    infoodsTagname: "VAL_ G",
  }),
  createUnit({
    fieldName: "arginine",
    unit: "g",
    labelPt: "Arginina",
    infoodsTagname: "ARG G",
  }),
  createUnit({
    fieldName: "histidine",
    unit: "g",
    labelPt: "Histidina",
    infoodsTagname: "HIS G",
  }),
  createUnit({
    fieldName: "alanine",
    unit: "g",
    labelPt: "Alanina",
    infoodsTagname: "ALA G",
  }),
  createUnit({
    fieldName: "asparticAcid",
    unit: "g",
    labelPt: "Ácido Aspártico",
    infoodsTagname: "ASP G",
  }),
  createUnit({
    fieldName: "glutamicAcid",
    unit: "g",
    labelPt: "Ácido Glutâmico",
    infoodsTagname: "GLU G",
  }),
  createUnit({
    fieldName: "glycine",
    unit: "g",
    labelPt: "Glicina",
    infoodsTagname: "GLY G",
  }),
  createUnit({
    fieldName: "proline",
    unit: "g",
    labelPt: "Prolina",
    infoodsTagname: "PRO G",
  }),
  createUnit({
    fieldName: "serine",
    unit: "g",
    labelPt: "Serina",
    infoodsTagname: "SER_G",
  }),
  createUnit({
    fieldName: "saturated",
    unit: "g",
    labelPt: "Saturados",
  }),
  createUnit({
    fieldName: "monounsaturated",
    unit: "g",
    labelPt: "Monoinsaturados",
  }),
  createUnit({
    fieldName: "polyunsaturated",
    unit: "g",
    labelPt: "Poliinsaturados",
  }),
  createUnit({
    fieldName: "twelveZero",
    unit: "g",
    labelPt: "12:0",
    infoodsTagname: "F12D0",
    systematicName: "Dodecanóico",
    commonName: "Láurico",
  }),
  createUnit({
    fieldName: "fourteenZero",
    unit: "g",
    labelPt: "14:0",
    infoodsTagname: "F14D0",
    systematicName: "Tetradecanóico",
    commonName: "Mirístico",
  }),
  createUnit({
    fieldName: "fourteenOne",
    unit: "g",
    labelPt: "14:1",
    infoodsTagname: "F14D1C",
    systematicName: "Tetradecenoico",
    commonName: "Miristoléico",
  }),
  createUnit({
    fieldName: "sixteenZero",
    unit: "g",
    labelPt: "16:0",
    infoodsTagname: "F16D0",
    systematicName: "Hexadecanóico",
    commonName: "Palmítico",
  }),
  createUnit({
    fieldName: "sixteenOne",
    unit: "g",
    labelPt: "16:1",
    infoodsTagname: "F16D1C",
    systematicName: "Hexadecenóico",
    commonName: "Palmitoléico",
  }),
  createUnit({
    fieldName: "eighteenZero",
    unit: "g",
    labelPt: "18:0",
    infoodsTagname: "F18D0C",
    systematicName: "Octadecanóico",
    commonName: "Esteárico",
  }),
  createUnit({
    fieldName: "eighteenOne",
    unit: "g",
    labelPt: "18:1",
    infoodsTagname: "F18D1C",
    systematicName: "Octadecenóico",
    commonName: "Oléico",
  }),
  createUnit({
    fieldName: "eighteenOneT",
    unit: "g",
    labelPt: "18:1t",
    infoodsTagname: "F18D1T",
    systematicName: "Trans-octadecenóico",
    commonName: "Elaídico",
  }),
  createUnit({
    fieldName: "eighteenTwoN6",
    unit: "g",
    labelPt: "18:2n6",
    infoodsTagname: "F18D2CN6",
  }),
  createUnit({
    fieldName: "eighteenTwoT",
    unit: "g",
    labelPt: "18:2t",
    infoodsTagname: "F18D2TN9",
    systematicName: "Trans-octadecadienóico",
  }),
  createUnit({
    fieldName: "eighteenThreeN3",
    unit: "g",
    labelPt: "18:3n3",
    infoodsTagname: "F18D3CN3",
  }),
  createUnit({
    fieldName: "twentyZero",
    unit: "g",
    labelPt: "20:0",
    infoodsTagname: "F20D0",
    systematicName: "Eicosanóico",
    commonName: "Araquídico",
  }),
  createUnit({
    fieldName: "twentyOne",
    unit: "g",
    labelPt: "20:1",
    infoodsTagname: "F20D1C",
    systematicName: "Eicosenóico",
    commonName: "Gadoléico",
  }),
  createUnit({
    fieldName: "twentyFour",
    unit: "g",
    labelPt: "20:4",
    infoodsTagname: "F20D4",
  }),
  createUnit({
    fieldName: "twentyFive",
    unit: "g",
    labelPt: "20:5",
    infoodsTagname: "F20D5",
    systematicName: "Eicosapentaenóico (EPA)",
    commonName: "Timnodônico",
  }),
  createUnit({
    fieldName: "twentyTwoZero",
    unit: "g",
    labelPt: "22:0",
    infoodsTagname: "F22D0",
    systematicName: "Docosanóico",
    commonName: "Behênico",
  }),
  createUnit({
    fieldName: "twentyTwoFive",
    unit: "g",
    labelPt: "22:5",
    infoodsTagname: "F22D5",
    systematicName: "Docosapentaenóico (DPA)",
    commonName: "Clupanodônico",
  }),
  createUnit({
    fieldName: "twentyTwoSix",
    unit: "g",
    labelPt: "22:6",
    infoodsTagname: "F22D6",
    systematicName: "Docosahexaenóico (DHA)",
  }),
  createUnit({
    fieldName: "twentyFourZero",
    unit: "g",
    labelPt: "24:0",
    infoodsTagname: "F24D0",
    systematicName: "Tetracosanóico",
    commonName: "Lignocérico",
  }),
] satisfies ValidUnit[];