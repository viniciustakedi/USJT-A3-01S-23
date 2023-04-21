import { MusicDataClient } from './clients/music-data-client'
import { UserClient } from './clients/user-client'

export class ApiClient {
  user: UserClient
  musicData: MusicDataClient

  constructor() {
    this.user = new UserClient()
    this.musicData = new MusicDataClient()
  }
}
