/*
  Warnings:

  - You are about to drop the column `name` on the `units` table. All the data in the column will be lost.
  - You are about to drop the column `namePt` on the `units` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[fieldName]` on the table `units` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[labelPt]` on the table `units` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `fieldName` to the `units` table without a default value. This is not possible if the table is not empty.
  - Added the required column `labelPt` to the `units` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "units_namePt_key";

-- DropIndex
DROP INDEX "units_name_key";

-- AlterTable
ALTER TABLE "units" DROP COLUMN "name",
DROP COLUMN "namePt",
ADD COLUMN     "fieldName" VARCHAR(255) NOT NULL,
ADD COLUMN     "labelPt" VARCHAR(255) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "units_fieldName_key" ON "units"("fieldName");

-- CreateIndex
CREATE UNIQUE INDEX "units_labelPt_key" ON "units"("labelPt");
