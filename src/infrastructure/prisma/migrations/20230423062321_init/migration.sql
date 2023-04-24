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
    "foodId" INTEGER NOT NULL,

    CONSTRAINT "amino_acids_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "categories_name_key" ON "categories"("name");

-- CreateIndex
CREATE UNIQUE INDEX "foods_name_key" ON "foods"("name");

-- CreateIndex
CREATE UNIQUE INDEX "foods_categoryId_key" ON "foods"("categoryId");

-- CreateIndex
CREATE UNIQUE INDEX "amino_acids_foodId_key" ON "amino_acids"("foodId");

-- AddForeignKey
ALTER TABLE "foods" ADD CONSTRAINT "foods_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "amino_acids" ADD CONSTRAINT "amino_acids_foodId_fkey" FOREIGN KEY ("foodId") REFERENCES "foods"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
