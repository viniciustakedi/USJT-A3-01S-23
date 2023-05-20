import { Track } from '../../node_modules/.prisma/client'

export type CreateUserTracksResult = {
  id: number
  tracks: Track[]
}
