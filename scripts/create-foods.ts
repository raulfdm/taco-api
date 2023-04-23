import { PrismaClient } from "@prisma/client";
import * as url from "url";
import path from "node:path";
import { z } from "zod";
import csvtojson from "csvtojson/v2";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

const prisma = new PrismaClient();

const foodSchema = z.array(
  z.object({
    id: z.string().transform((id) => Number(id)),
    categoryId: z.string().transform((id) => Number(id)),
    name: z.string(),
  })
);

try {
  const foodJson = await csvtojson().fromFile(
    path.resolve(__dirname, "../references/csv/food.csv")
  );

  const foods = foodSchema.parse(foodJson);

  await prisma.food.createMany({
    data: foods,
  });

  console.log("Foods created");

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
