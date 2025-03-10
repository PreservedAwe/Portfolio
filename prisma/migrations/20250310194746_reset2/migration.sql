-- CreateTable
CREATE TABLE "projects" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "github_link" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "sessions" (
    "client_id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "visitors" (
    "visitor_id" TEXT NOT NULL PRIMARY KEY,
    "confidence" TEXT NOT NULL,
    "user_agent" TEXT NOT NULL,
    "timezone" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "isp" TEXT NOT NULL,
    "timestamp" TEXT NOT NULL
);
