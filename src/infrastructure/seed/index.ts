import { getPrismaClient } from "../primaClient";
import { seedCategories } from "./categories";
import { seedFood } from "./foods";
import { seedUnits } from "./units";

const prisma = getPrismaClient({
  disableLogs: true,
});

try {
  await seedCategories(prisma);
  await seedUnits(prisma);
  await seedFood(prisma);

  await prisma.$disconnect();
} catch (error) {
  await prisma.$disconnect();

  if (
    error instanceof Error &&
    error.message.includes("Unique constraint failed")
  ) {
    console.log("Row already created");
    process.exit(0);
  }

  console.error(error);
  process.exit(1);
}
