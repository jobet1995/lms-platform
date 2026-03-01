/*
  Warnings:

  - You are about to drop the column `date` on the `BlogPost` table. All the data in the column will be lost.
  - You are about to drop the column `image` on the `BlogPost` table. All the data in the column will be lost.
  - Made the column `content` on table `BlogPost` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "BlogPost" DROP COLUMN "date",
DROP COLUMN "image",
ADD COLUMN     "featuredImage" TEXT,
ALTER COLUMN "excerpt" DROP NOT NULL,
ALTER COLUMN "content" SET NOT NULL;
