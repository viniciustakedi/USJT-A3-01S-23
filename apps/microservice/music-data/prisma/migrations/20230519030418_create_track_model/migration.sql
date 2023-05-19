-- CreateTable
CREATE TABLE "Track" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "user_id" INTEGER NOT NULL,
    "spotify_id" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT NOT NULL,
    "uri" TEXT NOT NULL,
    "album_name" TEXT NOT NULL,
    "image_url" TEXT NOT NULL,
    "release_date" DATETIME NOT NULL,
    "duration" INTEGER NOT NULL
);
