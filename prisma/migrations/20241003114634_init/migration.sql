-- CreateTable
CREATE TABLE "Login" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "loginAt" TIMESTAMP(3) NOT NULL,
    "logouAt" TIMESTAMP(3),

    CONSTRAINT "Login_pkey" PRIMARY KEY ("id")
);
