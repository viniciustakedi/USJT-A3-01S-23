/*
  Warnings:

  - Added the required column `image_url` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "spotify_id" TEXT NOT NULL,
    "spotify_uri" TEXT NOT NULL,
    "image_url" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_User" ("createdAt", "id", "name", "spotify_id", "spotify_uri", "updatedAt") SELECT "createdAt", "id", "name", "spotify_id", "spotify_uri", "updatedAt" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_spotify_id_key" ON "User"("spotify_id");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
