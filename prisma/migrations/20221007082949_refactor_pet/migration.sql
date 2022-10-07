/*
  Warnings:

  - You are about to drop the column `OwnerId` on the `pets` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[ownerId,name]` on the table `pets` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `ownerId` to the `pets` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "pets" DROP CONSTRAINT "pets_OwnerId_fkey";

-- DropIndex
DROP INDEX "pets_OwnerId_name_key";

-- AlterTable
ALTER TABLE "pets" DROP COLUMN "OwnerId",
ADD COLUMN     "ownerId" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "pets_ownerId_name_key" ON "pets"("ownerId", "name");

-- AddForeignKey
ALTER TABLE "pets" ADD CONSTRAINT "pets_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
