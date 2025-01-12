/*
  Warnings:

  - You are about to drop the column `continent` on the `visitors` table. All the data in the column will be lost.
  - You are about to drop the column `proxy` on the `visitors` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_visitors" (
    "visitor_id" TEXT NOT NULL PRIMARY KEY,
    "confidence" TEXT NOT NULL,
    "os" TEXT NOT NULL,
    "timezone" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "isp" TEXT NOT NULL,
    "timestamp" TEXT NOT NULL
);
INSERT INTO "new_visitors" ("city", "confidence", "country", "isp", "os", "timestamp", "timezone", "visitor_id") SELECT "city", "confidence", "country", "isp", "os", "timestamp", "timezone", "visitor_id" FROM "visitors";
DROP TABLE "visitors";
ALTER TABLE "new_visitors" RENAME TO "visitors";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
