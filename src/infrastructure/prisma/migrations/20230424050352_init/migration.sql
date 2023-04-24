-- CreateTable
CREATE TABLE "units" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "namePt" VARCHAR(255) NOT NULL,
    "unit" TEXT NOT NULL,

    CONSTRAINT "units_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "units_name_key" ON "units"("name");

-- CreateIndex
CREATE UNIQUE INDEX "units_namePt_key" ON "units"("namePt");
