import { prismaClient } from '../../database/prisma-client'
import { TrackResult } from '../../types/TrackResult'

export class GetTracksByUserIdService {
  constructor() {}

  async execute(id: number): Promise<TrackResult[]> {
    const tracks = await prismaClient.track.findMany({
      where: {
        userId: id
      },
      orderBy: {
        createdAt: 'desc'
      },
      take: 20
    })

    const tracksResult: TrackResult[] = tracks.map(track => ({
      id: track.id,
      spotifyId: track.spotifyId,
      name: track.name,
      uri: track.uri,
      albumName: track.albumName,
      imageUrl: track.imageUrl,
      duration: track.duration,
      userId: track.userId
    }))

    return tracksResult
  }
}
