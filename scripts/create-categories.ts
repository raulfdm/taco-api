import { PrismaClient } from "@prisma/client";
import * as url from "url";
import path from "node:path";
import { z } from "zod";
import csvtojson from "csvtojson/v2";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

const prisma = new PrismaClient();

const categoriesSchema = z.array(
  z.object({
    id: z.string().transform((id) => Number(id)),
    name: z.string(),
  })
);

try {
  const categoriesJson = await csvtojson().fromFile(
    path.resolve(__dirname, "../references/csv/categories.csv")
  );

  const categories = categoriesSchema.parse(categoriesJson);

  await prisma.category.createMany({
    data: categories,
  });

  console.log("Categories created");

  await prisma.$disconnect();
} catch (e) {
  await prisma.$disconnect();

  if ("message" in e && e.message.includes("Unique constraint failed")) {
    console.log("Categories already created");
    process.exit(0);
  }

  console.error(e);
  process.exit(1);
}
