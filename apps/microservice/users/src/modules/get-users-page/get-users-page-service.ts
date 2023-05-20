import { prismaClient } from '../../database/prisma-client'
import { UserResult } from '../../types/UserResult'

export class GetUsersPageService {
  constructor () {}

  async execute (): Promise<UserResult[]> {
    const users = await prismaClient.user.findMany({
      orderBy: {
        name: 'asc',
      }
    })

    const usersResult = users.map(user => ({
      id: user.id,
      spotifyId: user.spotifyId,
      name: user.name,
      imageUrl: user.imageUrl,
      uri: user.uri,
    }))

    return usersResult
  }
}
