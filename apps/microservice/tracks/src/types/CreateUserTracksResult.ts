import { Track } from '@prisma/client'

export type CreateUserTracksResult = {
  id: number
  tracks: Track[]
}
