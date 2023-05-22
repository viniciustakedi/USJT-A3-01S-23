import { prismaClient } from '../../database/prisma-client'
import { ArtistResult } from '../../types/ArtistResult'

export class GetArtistsByUserIdService {
  constructor() {}

  async execute (id: number): Promise<ArtistResult[]> {
    const userArtists = await prismaClient.artist.findMany({
      orderBy: {
        createdAt: 'desc'
      },
      where: {
        userId: id
      },
      take: 20
    })

    const artistsResult: ArtistResult[] = userArtists.map(artist => ({
      id: artist.id,
      spotifyId: artist.spotifyId,
      name: artist.name,
      uri: artist.uri,
      imageUrl: artist.imageUrl,
      genres: artist.genres,
      userId: artist.userId
    }))

    return artistsResult
  }
}
