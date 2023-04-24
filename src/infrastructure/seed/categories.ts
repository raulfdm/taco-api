import { PrismaClient } from "@prisma/client";
import * as url from "url";
import path from "node:path";
import { z } from "zod";
import csvtojson from "csvtojson/v2";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

const categoriesSchema = z.array(
  z.object({
    id: z.string().transform((id) => Number(id)),
    name: z.string(),
  })
);

export async function seedCategories(client: PrismaClient) {
  const categoriesJson = await csvtojson().fromFile(
    path.resolve(__dirname, "../../../references/csv/categories.csv")
  );

  const categories = categoriesSchema.parse(categoriesJson);

  await client.category.createMany({
    data: categories,
    skipDuplicates: true,
  });

  console.log("Categories created");
}
