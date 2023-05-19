import { PrismaClient } from '@prisma/client'
import { KafkaSendMessage } from '../../cluster/kafka/producer'
import { CreateUserDTO } from '../../dtos/CreateUserDTO'

export async function createUser(
  params: CreateUserDTO,
  prisma: PrismaClient,
  kafkaSendMessage: KafkaSendMessage
) {
  const { name, spotify_id, spotify_uri, image_url } = params

  const userAlreadyExists = await prisma.user.findFirst({
    where: {
      spotify_id
    }
  })

  if (userAlreadyExists) {
    await kafkaSendMessage.execute('USER_TRACKS', { message: {
      id: userAlreadyExists.id,
      tracks: JSON.stringify(params.tracks)
    }})

    return userAlreadyExists
  }

  const user = await prisma.user.create({
    data: {
      name,
      spotify_id,
      spotify_uri,
      image_url
    }
  })

  await kafkaSendMessage.execute('USER_TRACKS', { message: {
    id: user.id,
    tracks: JSON.stringify(params.tracks)
  }})

  return user
}
