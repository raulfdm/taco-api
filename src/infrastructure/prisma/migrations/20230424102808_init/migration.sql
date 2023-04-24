-- CreateTable
CREATE TABLE "categories" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,

    CONSTRAINT "categories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "foods" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "categoryId" INTEGER NOT NULL,

    CONSTRAINT "foods_pkey" PRIMARY KEY ("id")
);

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

-- CreateTable
CREATE TABLE "fatty_acids" (
    "foodId" INTEGER NOT NULL,
    "saturated" DOUBLE PRECISION NOT NULL,
    "monounsaturated" DOUBLE PRECISION NOT NULL,
    "polyunsaturated" DOUBLE PRECISION NOT NULL,
    "12:0" DOUBLE PRECISION,
    "14:0" DOUBLE PRECISION,
    "14:1" DOUBLE PRECISION,
    "16:0" DOUBLE PRECISION,
    "16:1" DOUBLE PRECISION,
    "18:0" DOUBLE PRECISION,
    "18:1" DOUBLE PRECISION,
    "18:1t" DOUBLE PRECISION,
    "18:2n6" DOUBLE PRECISION,
    "18:2t" DOUBLE PRECISION,
    "18:3n3" DOUBLE PRECISION,
    "20:0" DOUBLE PRECISION,
    "20:1" DOUBLE PRECISION,
    "20:4" DOUBLE PRECISION,
    "20:5" DOUBLE PRECISION,
    "22:0" DOUBLE PRECISION,
    "22:5" DOUBLE PRECISION,
    "22:6" DOUBLE PRECISION,
    "24:0" DOUBLE PRECISION
);

-- CreateTable
CREATE TABLE "nutrients" (
    "id" SERIAL NOT NULL,
    "foodId" INTEGER NOT NULL,
    "moisture" DOUBLE PRECISION,
    "kcal" DOUBLE PRECISION,
    "kJ" DOUBLE PRECISION,
    "protein" DOUBLE PRECISION,
    "lipids" DOUBLE PRECISION,
    "cholesterol" DOUBLE PRECISION,
    "carbohydrates" DOUBLE PRECISION,
    "dietaryFiber" DOUBLE PRECISION,
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

-- CreateTable
CREATE TABLE "units" (
    "id" SERIAL NOT NULL,
    "fieldName" VARCHAR(255) NOT NULL,
    "unit" TEXT NOT NULL,
    "labelPt" VARCHAR(255) NOT NULL,
    "infoodsTagname" VARCHAR(255),
    "systematicName" VARCHAR(255),
    "commonName" VARCHAR(255),

    CONSTRAINT "units_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "categories_name_key" ON "categories"("name");

-- CreateIndex
CREATE UNIQUE INDEX "foods_name_key" ON "foods"("name");

-- CreateIndex
CREATE UNIQUE INDEX "amino_acids_foodId_key" ON "amino_acids"("foodId");

-- CreateIndex
CREATE UNIQUE INDEX "fatty_acids_foodId_key" ON "fatty_acids"("foodId");

-- CreateIndex
CREATE UNIQUE INDEX "nutrients_foodId_key" ON "nutrients"("foodId");

-- CreateIndex
CREATE UNIQUE INDEX "units_fieldName_key" ON "units"("fieldName");

-- CreateIndex
CREATE UNIQUE INDEX "units_labelPt_key" ON "units"("labelPt");

-- CreateIndex
CREATE UNIQUE INDEX "units_infoodsTagname_key" ON "units"("infoodsTagname");

-- CreateIndex
CREATE UNIQUE INDEX "units_systematicName_key" ON "units"("systematicName");

-- CreateIndex
CREATE UNIQUE INDEX "units_commonName_key" ON "units"("commonName");

-- AddForeignKey
ALTER TABLE "foods" ADD CONSTRAINT "foods_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "amino_acids" ADD CONSTRAINT "amino_acids_foodId_fkey" FOREIGN KEY ("foodId") REFERENCES "foods"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "fatty_acids" ADD CONSTRAINT "fatty_acids_foodId_fkey" FOREIGN KEY ("foodId") REFERENCES "foods"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "nutrients" ADD CONSTRAINT "nutrients_foodId_fkey" FOREIGN KEY ("foodId") REFERENCES "foods"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
