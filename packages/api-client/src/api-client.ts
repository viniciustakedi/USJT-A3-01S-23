import { MusicDataClient } from './clients/music-data-client'
import { UserClient } from './clients/user-client'
import { SpotifyClient } from './clients/spotify-client'

export class ApiClient {
  user: UserClient
  musicData: MusicDataClient
  spotify: SpotifyClient

  constructor() {
    this.user = new UserClient()
    this.musicData = new MusicDataClient()
    this.spotify = new SpotifyClient()
  }
}
