-- CreateTable
CREATE TABLE "Track" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "spotifyId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "uri" TEXT NOT NULL,
    "albumName" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "duration" INTEGER NOT NULL,

    CONSTRAINT "Track_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "spotifyId" ON "Track"("spotifyId", "userId");
