import { prismaClient } from '../../database/prisma-client'
import { CreateUserTracksParams } from '../../types/CreateUserTracksParams'
import { CreateUserTracksResult } from '../../types/CreateUserTracksResult'

export class CreateTracksService {
  constructor () {}

  async execute (params: CreateUserTracksParams): Promise<CreateUserTracksResult> {
   const tracks = await prismaClient.$transaction(
      params.tracks.map(track => prismaClient.track.create({
        data: {
          spotifyId: track.spotifyId,
          name: track.name,
          uri: track.uri,
          albumName: track.albumName,
          imageUrl: track.imageUrl,
          duration: track.duration,
          userId: params.userId
        }
      }))
    )

    return { tracks, id: params.userId }
  }
}
