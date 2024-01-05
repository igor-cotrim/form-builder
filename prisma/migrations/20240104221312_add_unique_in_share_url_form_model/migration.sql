/*
  Warnings:

  - A unique constraint covering the columns `[share_url]` on the table `Form` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Form_share_url_key" ON "Form"("share_url");
