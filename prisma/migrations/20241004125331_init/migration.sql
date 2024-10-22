/*
  Warnings:

  - You are about to drop the column `updatedAt` on the `Services` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Login" ALTER COLUMN "loginAt" SET DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "Services" DROP COLUMN "updatedAt",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
