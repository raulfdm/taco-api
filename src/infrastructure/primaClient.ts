import { PrismaClient } from "@prisma/client";

type GetPrismaOpts = {
  disableLogs?: boolean;
};

export function getPrismaClient({ disableLogs }: GetPrismaOpts): PrismaClient {
  const prisma = new PrismaClient({
    // TODO: change this to development only
    log: disableLogs ? undefined : ["error", "info", "query", "warn"],
  });

  return prisma;
}
