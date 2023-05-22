import { CreateArtistsParams } from './CreateArtistsParams'

export type CreateUserArtistsParams = {
  userId: number
  artists: CreateArtistsParams[]
}
