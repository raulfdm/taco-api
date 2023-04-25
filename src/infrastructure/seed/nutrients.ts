import path from 'node:path';

import csvtojson from 'csvtojson/v2';
import * as url from 'url';
import { z } from 'zod';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const nutrientsSchema = z.array(
  z.object({
    foodId: z.string().transform((id) => Number(id)),
    moisture: z.string().transform((value) => (value ? Number(value) : null)),
    kcal: z.string().transform((value) => (value ? Number(value) : null)),
    kJ: z.string().transform((value) => (value ? Number(value) : null)),
    protein: z.string().transform((value) => (value ? Number(value) : null)),
    lipids: z.string().transform((value) => (value ? Number(value) : null)),
    cholesterol: z
      .string()
      .transform((value) => (value ? Number(value) : null)),
    carbohydrates: z
      .string()
      .transform((value) => (value ? Number(value) : null)),
    dietaryFiber: z
      .string()
      .transform((value) => (value ? Number(value) : null)),
    ash: z.string().transform((value) => (value ? Number(value) : null)),
    calcium: z.string().transform((value) => (value ? Number(value) : null)),
    magnesium: z.string().transform((value) => (value ? Number(value) : null)),
    manganese: z.string().transform((value) => (value ? Number(value) : null)),
    phosphorus: z.string().transform((value) => (value ? Number(value) : null)),
    iron: z.string().transform((value) => (value ? Number(value) : null)),
    sodium: z.string().transform((value) => (value ? Number(value) : null)),
    potassium: z.string().transform((value) => (value ? Number(value) : null)),
    copper: z.string().transform((value) => (value ? Number(value) : null)),
    zinc: z.string().transform((value) => (value ? Number(value) : null)),
    retinol: z.string().transform((value) => (value ? Number(value) : null)),
    re: z.string().transform((value) => (value ? Number(value) : null)),
    rae: z.string().transform((value) => (value ? Number(value) : null)),
    thiamin: z.string().transform((value) => (value ? Number(value) : null)),
    riboflavin: z.string().transform((value) => (value ? Number(value) : null)),
    pyridoxine: z.string().transform((value) => (value ? Number(value) : null)),
    niacin: z.string().transform((value) => (value ? Number(value) : null)),
    vitaminC: z.string().transform((value) => (value ? Number(value) : null)),
  })
);

export type Nutrients = z.infer<typeof nutrientsSchema>[number];

export type NutrientsMap = Map<number, Omit<Nutrients, 'foodId'>>;

export async function getNutrientsMap(): Promise<NutrientsMap> {
  const aminoAcidsJson = await csvtojson().fromFile(
    path.resolve(__dirname, '../../../references/csv/nutrients.csv')
  );

  const nutrients = nutrientsSchema.parse(aminoAcidsJson);

  const nutrientsMap: NutrientsMap = new Map();

  for (const aminoAcid of nutrients) {
    const { foodId, ...rest } = aminoAcid;
    nutrientsMap.set(aminoAcid.foodId, rest);
  }

  return nutrientsMap;
}
