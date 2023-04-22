import { PrismaClient } from "@prisma/client";

import references from "../references/TACO_formatted.json";

const prisma = new PrismaClient();

const categoriesSet = references.reduce((acc, { category }) => {
  acc.add(category);

  return acc;
}, new Set<string>());

const categories = Array.from(categoriesSet.values()).map((category) => ({
  name: category,
}));

try {
  console.log(categories);

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
