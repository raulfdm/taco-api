-- CreateTable
CREATE TABLE "categories" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "foods" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "categoryId" INTEGER NOT NULL,
    CONSTRAINT "foods_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "categories" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "amino_acids" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "foodId" INTEGER NOT NULL,
    "tryptophan" REAL NOT NULL,
    "threonine" REAL NOT NULL,
    "isoleucine" REAL NOT NULL,
    "leucine" REAL NOT NULL,
    "lysine" REAL NOT NULL,
    "methionine" REAL NOT NULL,
    "cystine" REAL NOT NULL,
    "phenylalanine" REAL NOT NULL,
    "tyrosine" REAL NOT NULL,
    "valine" REAL NOT NULL,
    "arginine" REAL NOT NULL,
    "histidine" REAL NOT NULL,
    "alanine" REAL NOT NULL,
    "asparticAcid" REAL NOT NULL,
    "glutamicAcid" REAL NOT NULL,
    "glycine" REAL NOT NULL,
    "proline" REAL NOT NULL,
    "serine" REAL NOT NULL,
    CONSTRAINT "amino_acids_foodId_fkey" FOREIGN KEY ("foodId") REFERENCES "foods" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "fatty_acids" (
    "foodId" INTEGER NOT NULL,
    "saturated" REAL NOT NULL,
    "monounsaturated" REAL NOT NULL,
    "polyunsaturated" REAL NOT NULL,
    "12:0" REAL,
    "14:0" REAL,
    "14:1" REAL,
    "16:0" REAL,
    "16:1" REAL,
    "18:0" REAL,
    "18:1" REAL,
    "18:1t" REAL,
    "18:2n6" REAL,
    "18:2t" REAL,
    "18:3n3" REAL,
    "20:0" REAL,
    "20:1" REAL,
    "20:4" REAL,
    "20:5" REAL,
    "22:0" REAL,
    "22:5" REAL,
    "22:6" REAL,
    "24:0" REAL,
    CONSTRAINT "fatty_acids_foodId_fkey" FOREIGN KEY ("foodId") REFERENCES "foods" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "nutrients" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "foodId" INTEGER NOT NULL,
    "moisture" REAL,
    "kcal" REAL,
    "kJ" REAL,
    "protein" REAL,
    "lipids" REAL,
    "cholesterol" REAL,
    "carbohydrates" REAL,
    "dietaryFiber" REAL,
    "ash" REAL,
    "calcium" REAL,
    "magnesium" REAL,
    "manganese" REAL,
    "phosphorus" REAL,
    "iron" REAL,
    "sodium" REAL,
    "potassium" REAL,
    "copper" REAL,
    "zinc" REAL,
    "retinol" REAL,
    "re" REAL,
    "rae" REAL,
    "thiamin" REAL,
    "riboflavin" REAL,
    "pyridoxine" REAL,
    "niacin" REAL,
    "vitaminC" REAL,
    CONSTRAINT "nutrients_foodId_fkey" FOREIGN KEY ("foodId") REFERENCES "foods" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "units" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "fieldName" TEXT NOT NULL,
    "unit" TEXT NOT NULL,
    "labelPt" TEXT NOT NULL,
    "infoodsTagname" TEXT,
    "systematicName" TEXT,
    "commonName" TEXT
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
