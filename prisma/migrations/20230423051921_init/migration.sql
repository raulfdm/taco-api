/*
  Warnings:

  - You are about to drop the column `categoryName` on the `foods` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `foods` table. All the data in the column will be lost.
  - You are about to drop the `nutrient_infos` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `categoryId` to the `foods` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `foods` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "foods" DROP CONSTRAINT "foods_categoryName_fkey";

-- AlterTable
ALTER TABLE "foods" DROP COLUMN "categoryName",
DROP COLUMN "description",
ADD COLUMN     "categoryId" INTEGER NOT NULL,
ADD COLUMN     "name" VARCHAR(255) NOT NULL;

-- DropTable
DROP TABLE "nutrient_infos";

-- AddForeignKey
ALTER TABLE "foods" ADD CONSTRAINT "foods_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
