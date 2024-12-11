/*
  Warnings:

  - The values [EN] on the enum `leads_lang` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `contentAr` on the `message_templates` table. All the data in the column will be lost.
  - You are about to drop the column `titleAr` on the `message_templates` table. All the data in the column will be lost.
  - Added the required column `contentEn` to the `message_templates` table without a default value. This is not possible if the table is not empty.
  - Added the required column `titleEn` to the `message_templates` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `leads` MODIFY `lang` ENUM('AR', 'FR') NOT NULL;

-- AlterTable
ALTER TABLE `message_templates` DROP COLUMN `contentAr`,
    DROP COLUMN `titleAr`,
    ADD COLUMN `contentEn` LONGTEXT NOT NULL,
    ADD COLUMN `titleEn` VARCHAR(191) NOT NULL;
