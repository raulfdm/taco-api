/*
  Warnings:

  - A unique constraint covering the columns `[id]` on the table `foods` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `foods` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "foods_id_key" ON "foods"("id");

-- CreateIndex
CREATE UNIQUE INDEX "foods_name_key" ON "foods"("name");
