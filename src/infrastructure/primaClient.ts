import { PrismaClient } from '@prisma/client';

import { env } from './env';

type GetPrismaOpts = {
  disableLogs?: boolean;
};

export function getPrismaClient({
  disableLogs,
}: GetPrismaOpts = {}): PrismaClient {
  let shouldLog = true;

  if (disableLogs === true) {
    shouldLog = false;
  }

  if (env.NODE_ENV === 'production') {
    shouldLog = false;
  }

  const prisma = new PrismaClient({
    log: shouldLog ? ['error', 'info', 'query', 'warn'] : undefined,
  });

  return prisma;
}
