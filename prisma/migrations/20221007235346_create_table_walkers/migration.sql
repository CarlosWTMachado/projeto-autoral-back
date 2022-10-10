-- CreateTable
CREATE TABLE "walkers" (
    "id" SERIAL NOT NULL,
    "cpf" TEXT NOT NULL,
    "picture" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "walkers_pk" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "walkers_cpf_key" ON "walkers"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "walkers_userId_key" ON "walkers"("userId");

-- AddForeignKey
ALTER TABLE "walkers" ADD CONSTRAINT "walkers_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
