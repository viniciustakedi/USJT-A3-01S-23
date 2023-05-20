import { prismaClient } from '../../database/prisma-client'
import { UserResult } from '../../types/UserResult'

export class GetUserByIdService {
  constructor() {}

  async execute(id: number): Promise<UserResult> {
    const user = await prismaClient.user.findUnique({
      where: {
        id
      }
    })

    if(!user) {
      throw new Error('User not found')
    }

    const userResult: UserResult = {
      id: user.id,
      spotifyId: user.spotifyId,
      name: user.name,
      imageUrl: user.imageUrl,
      uri: user.uri,
    }

    return userResult
  }
}
