/*
  Warnings:

  - A unique constraint covering the columns `[ownerId,id]` on the table `pets` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "pets_ownerId_id_key" ON "pets"("ownerId", "id");
