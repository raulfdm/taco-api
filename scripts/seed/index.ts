import { PrismaClient } from "@prisma/client";

import { getAminoAcidsMap } from "./amino-acids";
import { getFattyAcidsMap } from "./fatty-acids";
import { getNutrientsMap } from "./nutrients";
import { getFoods } from "./foods";

const prisma = new PrismaClient();

try {
  const [aminoAcidsMap, fattyAcidsMap, nutrientsMap] = await Promise.all([
    getAminoAcidsMap(),
    getFattyAcidsMap(),
    getNutrientsMap(),
  ]);

  const foods = await getFoods({ aminoAcidsMap, fattyAcidsMap, nutrientsMap });

  for await (const food of foods) {
    console.log("Creating food", food.name);

    await prisma.food.upsert({
      create: food,
      where: {
        id: food.id,
      },
      update: {},
    });

    console.log("created!");
  }

  console.log("All food has been created");

  await prisma.$disconnect();
} catch (e) {
  await prisma.$disconnect();

  if ("message" in e && e.message.includes("Unique constraint failed")) {
    console.log("Foods already created");
    process.exit(0);
  }

  console.error(e);
  process.exit(1);
}
