-- CreateTable
CREATE TABLE "nutrients" (
    "id" SERIAL NOT NULL,
    "foodId" INTEGER NOT NULL,
    "moisture" DOUBLE PRECISION,
    "kcal" DOUBLE PRECISION,
    "kJ" DOUBLE PRECISION,
    "protein" DOUBLE PRECISION,
    "lipids" DOUBLE PRECISION,
    "ash" DOUBLE PRECISION,
    "calcium" DOUBLE PRECISION,
    "magnesium" DOUBLE PRECISION,
    "manganese" DOUBLE PRECISION,
    "phosphorus" DOUBLE PRECISION,
    "iron" DOUBLE PRECISION,
    "sodium" DOUBLE PRECISION,
    "potassium" DOUBLE PRECISION,
    "copper" DOUBLE PRECISION,
    "zinc" DOUBLE PRECISION,
    "retinol" DOUBLE PRECISION,
    "re" DOUBLE PRECISION,
    "rae" DOUBLE PRECISION,
    "thiamin" DOUBLE PRECISION,
    "riboflavin" DOUBLE PRECISION,
    "pyridoxine" DOUBLE PRECISION,
    "niacin" DOUBLE PRECISION,
    "vitaminC" DOUBLE PRECISION,

    CONSTRAINT "nutrients_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "nutrients_foodId_key" ON "nutrients"("foodId");

-- AddForeignKey
ALTER TABLE "nutrients" ADD CONSTRAINT "nutrients_foodId_fkey" FOREIGN KEY ("foodId") REFERENCES "foods"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
