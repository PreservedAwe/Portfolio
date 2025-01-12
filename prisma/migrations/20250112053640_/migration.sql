-- CreateTable
CREATE TABLE "visitors" (
    "visitor_id" TEXT NOT NULL PRIMARY KEY,
    "browser" TEXT NOT NULL,
    "os" TEXT NOT NULL,
    "timezone" TEXT NOT NULL,
    "continent" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "isp" TEXT NOT NULL,
    "proxy" TEXT NOT NULL,
    "timestamp" TEXT NOT NULL
);
