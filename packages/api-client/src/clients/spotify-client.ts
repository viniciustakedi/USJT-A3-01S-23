import axios, { AxiosInstance } from 'axios'
import { AccessTokenResult} from '../types/spotify/AccessTokenResult'
import { SpotifyUserResult } from '../types/spotify/SpotifyUserResult'
import { SpotifyUserTopArtistsResult } from '../types/spotify/SpotifyUserTopArtistsResult'
import { SpotifyUserTracksResult } from '../types/spotify/SpotifyUserTracksResult'

export class SpotifyClient {
  private spotifyAuth: AxiosInstance
  private spotifyApi: AxiosInstance

  constructor() {
    this.spotifyAuth = axios.create({
      baseURL: 'https://accounts.spotify.com',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': `Basic ${import.meta.env.VITE_ENCODE_BASE64_SECRETE_AND_CLIENT}`
      }
    })

    this.spotifyApi = axios.create({
      baseURL: 'https://api.spotify.com/v1'
     })
  }

  async getAccessToken(code: string): Promise<AccessTokenResult> {
    return (await this.spotifyAuth.post('/api/token', {
      'grant_type': 'authorization_code',
      'code': `${code}`,
      'redirect_uri': `${import.meta.env.VITE_SPOTIFY_REDIRECT_URI}`
    })).data
  }

  async getUserProfile (accessToken: string): Promise<SpotifyUserResult> {
    return (await this.spotifyApi.get('/me', {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    })).data
  }

  async getUserTopArtists (accessToken: string): Promise<SpotifyUserTopArtistsResult> {
    return (await this.spotifyApi.get('/me/top/artists?time_range=short_term', {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    })).data
  }

  async getUserTopTracks (accessToken: string): Promise<SpotifyUserTracksResult> {
    return (await this.spotifyApi.get('/me/top/tracks?time_range=short_term', {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    })).data
  }
}
