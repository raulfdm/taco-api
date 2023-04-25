import type { PrismaClient } from '@prisma/client';

import { unitsToSave } from './unitsToSave';

export async function seedUnits(client: PrismaClient) {
  console.group('Seeding units');
  for (const unit of unitsToSave) {
    console.log(`Creating unit: "${unit.fieldName}"`);

    await client.unit.create({
      data: unit,
    });

    console.log('Done.');
  }

  console.log('All units created successfully.');
  console.groupEnd();
}
