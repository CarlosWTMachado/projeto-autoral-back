-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "addressId" INTEGER NOT NULL,

    CONSTRAINT "users_pk" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "addresses" (
    "id" SERIAL NOT NULL,
    "number" INTEGER NOT NULL,
    "complement" TEXT NOT NULL,
    "cepId" INTEGER NOT NULL,

    CONSTRAINT "addresses_pk" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ceps" (
    "id" SERIAL NOT NULL,
    "number" INTEGER NOT NULL,

    CONSTRAINT "ceps_pk" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "phones" (
    "id" SERIAL NOT NULL,
    "number" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "phones_pk" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "ceps_number_key" ON "ceps"("number");

-- CreateIndex
CREATE UNIQUE INDEX "phones_number_key" ON "phones"("number");

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_addressId_fkey" FOREIGN KEY ("addressId") REFERENCES "addresses"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "addresses" ADD CONSTRAINT "addresses_cepId_fkey" FOREIGN KEY ("cepId") REFERENCES "ceps"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "phones" ADD CONSTRAINT "phones_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
