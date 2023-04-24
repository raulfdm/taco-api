import type { PrismaClient } from "@prisma/client";

import { unitsToSave } from "./unitsToSave";

export async function seedUnits(client: PrismaClient) {
  await client.unit.createMany({
    data: unitsToSave,
    skipDuplicates: true,
  });

  console.log("Units created");
}
