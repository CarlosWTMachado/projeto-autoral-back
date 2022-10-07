/*
  Warnings:

  - A unique constraint covering the columns `[OwnerId,name]` on the table `pets` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "pets_OwnerId_name_key" ON "pets"("OwnerId", "name");
