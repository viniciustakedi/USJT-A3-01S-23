-- CreateTable
CREATE TABLE "Artist" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "genres" TEXT[],
    "uri" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "spotifyId" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Artist_pkey" PRIMARY KEY ("id")
);
