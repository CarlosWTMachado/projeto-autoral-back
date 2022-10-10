-- CreateTable
CREATE TABLE "availableWalks" (
    "id" SERIAL NOT NULL,
    "completed" BOOLEAN NOT NULL DEFAULT false,
    "petId" INTEGER NOT NULL,

    CONSTRAINT "availableWalks_pk" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "onGoingWalks" (
    "id" SERIAL NOT NULL,
    "walkerId" INTEGER NOT NULL,
    "availableWalkId" INTEGER NOT NULL,

    CONSTRAINT "onGoingWalks_pk" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "availableWalks_petId_key" ON "availableWalks"("petId");

-- CreateIndex
CREATE UNIQUE INDEX "onGoingWalks_availableWalkId_key" ON "onGoingWalks"("availableWalkId");

-- AddForeignKey
ALTER TABLE "availableWalks" ADD CONSTRAINT "availableWalks_petId_fkey" FOREIGN KEY ("petId") REFERENCES "pets"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "onGoingWalks" ADD CONSTRAINT "onGoingWalks_availableWalkId_fkey" FOREIGN KEY ("availableWalkId") REFERENCES "availableWalks"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "onGoingWalks" ADD CONSTRAINT "onGoingWalks_walkerId_fkey" FOREIGN KEY ("walkerId") REFERENCES "walkers"("id") ON DELETE CASCADE ON UPDATE CASCADE;
