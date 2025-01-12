/*
  Warnings:

  - You are about to drop the column `browser` on the `visitors` table. All the data in the column will be lost.
  - Added the required column `confidence` to the `visitors` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_visitors" (
    "visitor_id" TEXT NOT NULL PRIMARY KEY,
    "confidence" TEXT NOT NULL,
    "os" TEXT NOT NULL,
    "timezone" TEXT NOT NULL,
    "continent" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "isp" TEXT NOT NULL,
    "proxy" TEXT NOT NULL,
    "timestamp" TEXT NOT NULL
);
INSERT INTO "new_visitors" ("city", "continent", "country", "isp", "os", "proxy", "timestamp", "timezone", "visitor_id") SELECT "city", "continent", "country", "isp", "os", "proxy", "timestamp", "timezone", "visitor_id" FROM "visitors";
DROP TABLE "visitors";
ALTER TABLE "new_visitors" RENAME TO "visitors";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
