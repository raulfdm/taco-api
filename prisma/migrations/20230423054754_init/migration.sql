/*
  Warnings:

  - You are about to drop the `AminoAcids` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "AminoAcids" DROP CONSTRAINT "AminoAcids_foodId_fkey";

-- DropTable
DROP TABLE "AminoAcids";

-- CreateTable
CREATE TABLE "amino_acids" (
    "id" SERIAL NOT NULL,
    "foodId" INTEGER NOT NULL,
    "tryptophan" DOUBLE PRECISION NOT NULL,
    "threonine" DOUBLE PRECISION NOT NULL,
    "isoleucine" DOUBLE PRECISION NOT NULL,
    "leucine" DOUBLE PRECISION NOT NULL,
    "lysine" DOUBLE PRECISION NOT NULL,
    "methionine" DOUBLE PRECISION NOT NULL,
    "cystine" DOUBLE PRECISION NOT NULL,
    "phenylalanine" DOUBLE PRECISION NOT NULL,
    "tyrosine" DOUBLE PRECISION NOT NULL,
    "valine" DOUBLE PRECISION NOT NULL,
    "arginine" DOUBLE PRECISION NOT NULL,
    "histidine" DOUBLE PRECISION NOT NULL,
    "alanine" DOUBLE PRECISION NOT NULL,
    "asparticAcid" DOUBLE PRECISION NOT NULL,
    "glutamicAcid" DOUBLE PRECISION NOT NULL,
    "glycine" DOUBLE PRECISION NOT NULL,
    "proline" DOUBLE PRECISION NOT NULL,
    "serine" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "amino_acids_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "amino_acids" ADD CONSTRAINT "amino_acids_foodId_fkey" FOREIGN KEY ("foodId") REFERENCES "foods"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
