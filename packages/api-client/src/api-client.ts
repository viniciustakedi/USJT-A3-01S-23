import { TracksClient } from './clients/tracks-client'
import { UserClient } from './clients/user-client'
import { SpotifyClient } from './clients/spotify-client'
import { ArtistsClient } from './clients/artists-client'

export class ApiClient {
  user: UserClient
  tracks: TracksClient
  spotify: SpotifyClient
  artists: ArtistsClient

  constructor() {
    this.user = new UserClient()
    this.tracks = new TracksClient()
    this.spotify = new SpotifyClient()
    this.artists = new ArtistsClient()
  }
}
