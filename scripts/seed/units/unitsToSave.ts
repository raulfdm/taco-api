import type { ValidUnit } from "./types";

type PartialUnit = Pick<ValidUnit, "name" | "unit" | "namePt"> &
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
    name: "moisture",
    unit: "%",
    namePt: "Umidade",
    infoodsTagname: "WATER",
  }),
  createUnit({
    name: "kcal",
    unit: "kcal",
    namePt: "Energia",
    infoodsTagname: "ENERC",
  }),
  createUnit({
    name: "kJ",
    unit: "kj",
    namePt: "Energia",
    infoodsTagname: "ENERC",
  }),
  createUnit({
    name: "protein",
    unit: "g",
    namePt: "Proteína",
    infoodsTagname: "PROCNT",
  }),
  createUnit({
    name: "lipids",
    unit: "g",
    namePt: "Lipídeos",
    infoodsTagname: "FAT",
  }),
  createUnit({
    name: "cholesterol",
    unit: "mg",
    namePt: "Colesterol",
    infoodsTagname: "CHOLE",
  }),
  createUnit({
    name: "carbohydrates",
    unit: "g",
    namePt: "Carboidrato",
    infoodsTagname: "CHOCDF",
  }),
  createUnit({
    name: "dietaryFiber",
    unit: "g",
    namePt: "Fibra Alimentar",
    infoodsTagname: "FIBTG",
  }),
  createUnit({
    name: "ash",
    unit: "g",
    namePt: "Cinzas",
    infoodsTagname: "ASH",
  }),
  createUnit({
    name: "calcium",
    unit: "mg",
    namePt: "Cálcio",
    infoodsTagname: "CA",
  }),
  createUnit({
    name: "magnesium",
    unit: "mg",
    namePt: "Magnésio",
    infoodsTagname: "MG",
  }),
  createUnit({
    name: "manganese",
    unit: "mg",
    namePt: "Manganês",
    infoodsTagname: "MN",
  }),
  createUnit({
    name: "phosphorus",
    unit: "mg",
    namePt: "Fósforo",
    infoodsTagname: "P",
  }),
  createUnit({
    name: "iron",
    unit: "mg",
    namePt: "Ferro",
    infoodsTagname: "FE",
  }),
  createUnit({
    name: "sodium",
    unit: "mg",
    namePt: "Sódio",
    infoodsTagname: "NA",
  }),
  createUnit({
    name: "potassium",
    unit: "mg",
    namePt: "Potássio",
    infoodsTagname: "K",
  }),
  createUnit({
    name: "copper",
    unit: "mg",
    namePt: "Cobre",
    infoodsTagname: "CU",
  }),
  createUnit({
    name: "zinc",
    unit: "mg",
    namePt: "Zinco",
    infoodsTagname: "ZN",
  }),
  createUnit({
    name: "retinol",
    unit: "μg",
    namePt: "Retinol",
    infoodsTagname: "RETOL",
  }),
  createUnit({
    name: "re",
    unit: "μg",
    namePt: "RE",
    infoodsTagname: "VITA",
  }),
  createUnit({
    name: "rae",
    unit: "μg",
    namePt: "RAE",
    infoodsTagname: "VITA",
  }),
  createUnit({
    name: "thiamin",
    unit: "mg",
    namePt: "Tiamina",
    infoodsTagname: "THIA",
  }),
  createUnit({
    name: "riboflavin",
    unit: "mg",
    namePt: "Riboflavina",
    infoodsTagname: "RIFB",
  }),
  createUnit({
    name: "pyridoxine",
    unit: "mg",
    namePt: "Piridoxina",
  }),
  createUnit({
    name: "niacin",
    unit: "mg",
    namePt: "Niacina",
    infoodsTagname: "NIA",
  }),
  createUnit({
    name: "vitaminC",
    unit: "mg",
    namePt: "Vitamina C",
    infoodsTagname: "VITC",
  }),
  createUnit({
    name: "tryptophan",
    unit: "g",
    namePt: "Triptofano",
    infoodsTagname: "TRP G",
  }),
  createUnit({
    name: "threonine",
    unit: "g",
    namePt: "Treonina",
    infoodsTagname: "THR G",
  }),
  createUnit({
    name: "isoleucine",
    unit: "g",
    namePt: "Isoleucina",
    infoodsTagname: "LE_G",
  }),
  createUnit({
    name: "leucine",
    unit: "g",
    namePt: "Leucina",
    infoodsTagname: "LEU G",
  }),
  createUnit({
    name: "lysine",
    unit: "g",
    namePt: "Lisina",
    infoodsTagname: "LYS G",
  }),
  createUnit({
    name: "methionine",
    unit: "g",
    namePt: "Metionina",
    infoodsTagname: "MET G",
  }),
  createUnit({
    name: "cystine",
    unit: "g",
    namePt: "Cistina",
    infoodsTagname: "CYS G",
  }),
  createUnit({
    name: "phenylalanine",
    unit: "g",
    namePt: "Fenilalanina",
    infoodsTagname: "PHE G",
  }),
  createUnit({
    name: "tyrosine",
    unit: "g",
    namePt: "Tirosina",
    infoodsTagname: "TYR G",
  }),
  createUnit({
    name: "valine",
    unit: "g",
    namePt: "Valina",
    infoodsTagname: "VAL_ G",
  }),
  createUnit({
    name: "arginine",
    unit: "g",
    namePt: "Arginina",
    infoodsTagname: "ARG G",
  }),
  createUnit({
    name: "histidine",
    unit: "g",
    namePt: "Histidina",
    infoodsTagname: "HIS G",
  }),
  createUnit({
    name: "alanine",
    unit: "g",
    namePt: "Alanina",
    infoodsTagname: "ALA G",
  }),
  createUnit({
    name: "asparticAcid",
    unit: "g",
    namePt: "Ácido Aspártico",
    infoodsTagname: "ASP G",
  }),
  createUnit({
    name: "glutamicAcid",
    unit: "g",
    namePt: "Ácido Glutâmico",
    infoodsTagname: "GLU G",
  }),
  createUnit({
    name: "glycine",
    unit: "g",
    namePt: "Glicina",
    infoodsTagname: "GLY G",
  }),
  createUnit({
    name: "proline",
    unit: "g",
    namePt: "Prolina",
    infoodsTagname: "PRO G",
  }),
  createUnit({
    name: "serine",
    unit: "g",
    namePt: "Serina",
    infoodsTagname: "SER_G",
  }),
  createUnit({
    name: "saturated",
    unit: "g",
    namePt: "Saturados",
  }),
  createUnit({
    name: "monounsaturated",
    unit: "g",
    namePt: "Monoinsaturados",
  }),
  createUnit({
    name: "polyunsaturated",
    unit: "g",
    namePt: "Poliinsaturados",
  }),
  createUnit({
    name: "twelveZero",
    unit: "g",
    namePt: "12:0",
    infoodsTagname: "F12D0",
    systematicName: "Dodecanóico",
    commonName: "Láurico",
  }),
  createUnit({
    name: "fourteenZero",
    unit: "g",
    namePt: "14:0",
    infoodsTagname: "F14D0",
    systematicName: "Tetradecanóico",
    commonName: "Mirístico",
  }),
  createUnit({
    name: "fourteenOne",
    unit: "g",
    namePt: "14:1",
    infoodsTagname: "F14D1C",
    systematicName: "Tetradecenoico",
    commonName: "Miristoléico",
  }),
  createUnit({
    name: "sixteenZero",
    unit: "g",
    namePt: "16:0",
    infoodsTagname: "F16D0",
    systematicName: "Hexadecanóico",
    commonName: "Palmítico",
  }),
  createUnit({
    name: "sixteenOne",
    unit: "g",
    namePt: "16:1",
    infoodsTagname: "F16D1C",
    systematicName: "Hexadecenóico",
    commonName: "Palmitoléico",
  }),
  createUnit({
    name: "eighteenZero",
    unit: "g",
    namePt: "18:0",
    infoodsTagname: "F18D0C",
    systematicName: "Octadecanóico",
    commonName: "Esteárico",
  }),
  createUnit({
    name: "eighteenOne",
    unit: "g",
    namePt: "18:1",
    infoodsTagname: "F18D1C",
    systematicName: "Octadecenóico",
    commonName: "Oléico",
  }),
  createUnit({
    name: "eighteenOneT",
    unit: "g",
    namePt: "18:1t",
    infoodsTagname: "F18D1T",
    systematicName: "Trans-octadecenóico",
    commonName: "Elaídico",
  }),
  createUnit({
    name: "eighteenTwoN6",
    unit: "g",
    namePt: "18:2n6",
    infoodsTagname: "F18D2CN6",
  }),
  createUnit({
    name: "eighteenTwoT",
    unit: "g",
    namePt: "18:2t",
    infoodsTagname: "F18D2TN9",
    systematicName: "Trans-octadecadienóico",
  }),
  createUnit({
    name: "eighteenThreeN3",
    unit: "g",
    namePt: "18:3n3",
    infoodsTagname: "F18D3CN3",
  }),
  createUnit({
    name: "twentyZero",
    unit: "g",
    namePt: "20:0",
    infoodsTagname: "F20D0",
    systematicName: "Eicosanóico",
    commonName: "Araquídico",
  }),
  createUnit({
    name: "twentyOne",
    unit: "g",
    namePt: "20:1",
    infoodsTagname: "F20D1C",
    systematicName: "Eicosenóico",
    commonName: "Gadoléico",
  }),
  createUnit({
    name: "twentyFour",
    unit: "g",
    namePt: "20:4",
    infoodsTagname: "F20D4",
  }),
  createUnit({
    name: "twentyFive",
    unit: "g",
    namePt: "20:5",
    infoodsTagname: "F20D5",
    systematicName: "Eicosapentaenóico (EPA)",
    commonName: "Timnodônico",
  }),
  createUnit({
    name: "twentyTwoZero",
    unit: "g",
    namePt: "22:0",
    infoodsTagname: "F22D0",
    systematicName: "Docosanóico",
    commonName: "Behênico",
  }),
  createUnit({
    name: "twentyTwoFive",
    unit: "g",
    namePt: "22:5",
    infoodsTagname: "F22D5",
    systematicName: "Docosapentaenóico (DPA)",
    commonName: "Clupanodônico",
  }),
  createUnit({
    name: "twentyTwoSix",
    unit: "g",
    namePt: "22:6",
    infoodsTagname: "F22D6",
    systematicName: "Docosahexaenóico (DHA)",
  }),
  createUnit({
    name: "twentyFourZero",
    unit: "g",
    namePt: "24:0",
    infoodsTagname: "F24D0",
    systematicName: "Tetracosanóico",
    commonName: "Lignocérico",
  }),
] satisfies ValidUnit[];
