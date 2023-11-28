import path from "node:path";

import * as url from "url";
import type { PrismaClient } from "@prisma/client";
import csvtojson from "csvtojson/v2";
import { z } from "zod";

import type { AminoAcid, AminoAcidMap } from "./amino-acids";
import { getAminoAcidsMap } from "./amino-acids";
import type { FattyAcid, FattyAcidMap } from "./fatty-acids";
import { getFattyAcidsMap } from "./fatty-acids";
import type { Nutrients, NutrientsMap } from "./nutrients";
import { getNutrientsMap } from "./nutrients";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

const foodSchema = z.array(
  z.object({
    id: z.string().transform((id) => Number(id)),
    categoryId: z.string().transform((id) => Number(id)),
    name: z.string(),
  }),
);

type Food = z.infer<typeof foodSchema>[number];

type PrismaFood = Food & {
  aminoAcids?: {
    create: Omit<AminoAcid, "foodId">;
  };
  fattyAcids?: {
    create: Omit<FattyAcid, "foodId">;
  };
  nutrients?: {
    create: Omit<Nutrients, "foodId">;
  };
};

type GetFoodOptions = {
  fattyAcidsMap: FattyAcidMap;
  aminoAcidsMap: AminoAcidMap;
  nutrientsMap: NutrientsMap;
};

async function getFoods({
  aminoAcidsMap,
  fattyAcidsMap,
  nutrientsMap,
}: GetFoodOptions): Promise<PrismaFood[]> {
  const foodJson = await csvtojson().fromFile(
    path.resolve(__dirname, "../../../references/csv/food.csv"),
  );

  const foods = foodSchema.parse(foodJson);

  const foodsMap: PrismaFood[] = [];

  for (const food of foods) {
    const foodMap: PrismaFood = {
      ...food,
      aminoAcids: undefined,
      fattyAcids: undefined,
    };

    const aminoAcids = aminoAcidsMap.get(food.id);
    const fattyAcids = fattyAcidsMap.get(food.id);
    const nutrients = nutrientsMap.get(food.id);

    if (aminoAcids) {
      foodMap.aminoAcids = {
        create: aminoAcids,
      };
    }

    if (fattyAcids) {
      foodMap.fattyAcids = {
        create: fattyAcids,
      };
    }

    if (nutrients) {
      foodMap.nutrients = {
        create: nutrients,
      };
    }

    foodsMap.push(foodMap);
  }

  return foodsMap;
}

export async function seedFood(client: PrismaClient) {
  const [aminoAcidsMap, fattyAcidsMap, nutrientsMap] = await Promise.all([
    getAminoAcidsMap(),
    getFattyAcidsMap(),
    getNutrientsMap(),
  ]);

  const foods = await getFoods({ aminoAcidsMap, fattyAcidsMap, nutrientsMap });

  console.group("Seeding foods");
  for (const food of foods) {
    console.log(`Creating food "${food.name}"`);

    await client.food.upsert({
      create: food,
      where: {
        id: food.id,
      },
      update: {},
    });

    console.log("Done.");
  }

  console.log("All foods created successfully.");
  console.groupEnd();
}
