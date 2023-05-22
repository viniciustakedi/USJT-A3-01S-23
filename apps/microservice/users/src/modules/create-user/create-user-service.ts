import { KafkaSendMessage } from '../../clusters/kafka/producer'
import { prismaClient } from '../../database/prisma-client'
import { CreateUserParams } from '../../types/CreateUserParams'
import { CreateUserResult } from '../../types/CreateUserResult'

export class CreateUserService {
  constructor () {}

  async execute (params: CreateUserParams): Promise<CreateUserResult> {
    const kafkaProducer = new KafkaSendMessage()

    const userExists = await prismaClient.user.findFirst({
      where: {
        spotifyId: params.spotifyId
      }
    })

    if (userExists) {
      await kafkaProducer.execute('CREATE_USER_TRACKS', {
        userId: userExists.id,
        tracks: params.tracks
      })
      await kafkaProducer.execute('CREATE_USER_ARTISTS', {
        userId: userExists.id,
        artists: params.artists
      })
      return userExists
    }

    const user = await prismaClient.user.create({
      data: {
        spotifyId: params.spotifyId,
        name: params.name,
        uri: params.uri,
        imageUrl: params.imageUrl
      }
    })

    await kafkaProducer.execute('CREATE_USER_TRACKS', {
      userId: user.id,
      tracks: params.tracks
    })
    await kafkaProducer.execute('CREATE_USER_ARTISTS', {
      userId: user.id,
      artists: params.artists
    })

    return user
  }
}
