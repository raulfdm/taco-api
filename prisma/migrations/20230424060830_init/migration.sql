/*
  Warnings:

  - A unique constraint covering the columns `[infoodsTagname]` on the table `units` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[systematicName]` on the table `units` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[commonName]` on the table `units` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `infoodsTagname` to the `units` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "units" ADD COLUMN     "commonName" VARCHAR(255),
ADD COLUMN     "infoodsTagname" VARCHAR(255) NOT NULL,
ADD COLUMN     "systematicName" VARCHAR(255);

-- CreateIndex
CREATE UNIQUE INDEX "units_infoodsTagname_key" ON "units"("infoodsTagname");

-- CreateIndex
CREATE UNIQUE INDEX "units_systematicName_key" ON "units"("systematicName");

-- CreateIndex
CREATE UNIQUE INDEX "units_commonName_key" ON "units"("commonName");
