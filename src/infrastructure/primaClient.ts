import { PrismaClient } from "@prisma/client";

export function getPrismaClient(): PrismaClient {
  const prisma = new PrismaClient({
    // TODO: change this to development only
    log: ["error", "info", "query", "warn"],
  });

  return prisma;
}
