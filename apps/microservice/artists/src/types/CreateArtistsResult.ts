import { Artist } from '../../node_modules/.prisma/client'

export type CreateArtistsResult = {
  id: number
  artists: Artist[]
}
