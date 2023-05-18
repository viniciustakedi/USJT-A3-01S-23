import { PrismaClient } from '@prisma/client'
import { KafkaSendMessage } from '../../cluster/kafka/producer'
import { CreateUserDTO } from '../../dtos/CreateUserDTO'

export async function createUser(
  params: CreateUserDTO,
  prisma: PrismaClient,
  kafkaSendMessage: KafkaSendMessage
) {
  const { name, spotify_id, spotify_uri } = params

  const userAlreadyExists = await prisma.user.findFirst({
    where: {
      spotify_id
    }
  })

  if (userAlreadyExists) {
    await kafkaSendMessage.execute('users', { message: {
      id: userAlreadyExists.id,
      name: userAlreadyExists.name,
      spotify_id: userAlreadyExists.spotify_id,
      spotify_uri: userAlreadyExists.spotify_uri
    }})

    return userAlreadyExists
  }

  const user = await prisma.user.create({
    data: {
      name,
      spotify_id,
      spotify_uri
    }
  })

  await kafkaSendMessage.execute('users', { message: {
    id: user.id,
    name: user.name,
    spotify_id: user.spotify_id,
    spotify_uri: user.spotify_uri
  }})

  return user
}