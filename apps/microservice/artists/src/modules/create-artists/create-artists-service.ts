import { prismaClient } from '../../database/prisma-client'
import { CreateArtistsResult } from '../../types/CreateArtistsResult'
import { CreateUserArtistsParams } from '../../types/CreateUserArtistsParams'

export class CreateArtistsService {
  constructor() { }

  async execute(params: CreateUserArtistsParams): Promise<CreateArtistsResult> {
    const { userId, artists } = params

    console.log("artists to service", artists)

    const existedArtists = await prismaClient.artist.findMany({
      where: {
        userId
      }
    })

    const artistsToCreate = artists.filter(artist => {
      return !existedArtists.some(existedArtist => existedArtist.spotifyId === artist.spotifyId && existedArtist.userId === userId)
    })

    const createdArtists = await prismaClient.$transaction(
      artistsToCreate.map(artist => prismaClient.artist.create({
        data: {
          name: artist.name,
          genres: artist.genres,
          uri: artist.uri,
          imageUrl: artist.imageUrl,
          spotifyId: artist.spotifyId,
          userId
        }
      }))
    )

    const mapArtistsToResult: CreateArtistsResult = {
      id: userId,
      artists: createdArtists
    }

    return mapArtistsToResult
  }
}
