/*
  Warnings:

  - A unique constraint covering the columns `[walkerId,availableWalkId]` on the table `onGoingWalks` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "onGoingWalks_walkerId_availableWalkId_key" ON "onGoingWalks"("walkerId", "availableWalkId");
