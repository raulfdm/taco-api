import { PrismaClient } from "@prisma/client";

import { getAminoAcidsMap } from "./amino-acids";
import { getFattyAcidsMap } from "./fatty-acids";
import { getFoods } from "./foods";

const prisma = new PrismaClient();

try {
  const aminoAcidsMap = await getAminoAcidsMap();
  const fattyAcidsMap = await getFattyAcidsMap();
  const foods = await getFoods({ aminoAcidsMap, fattyAcidsMap });

  for await (const food of foods) {
    console.log("Creating food", food.name);

    await prisma.food.create({
      data: food,
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
