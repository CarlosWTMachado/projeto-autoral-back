-- CreateTable
CREATE TABLE "pets" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "picture" TEXT,
    "vaccinated" BOOLEAN NOT NULL,
    "OwnerId" INTEGER NOT NULL,

    CONSTRAINT "pets_pk" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "pets" ADD CONSTRAINT "pets_OwnerId_fkey" FOREIGN KEY ("OwnerId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
