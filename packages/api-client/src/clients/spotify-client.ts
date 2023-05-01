import axios, { AxiosInstance } from 'axios'
import { GetAccessTokenResult } from '../types/getAccessTokenResult'
import { GetUserResult } from '../types/getUserResult'

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

  async getAccessToken(code: string): Promise<GetAccessTokenResult> {
    return await this.spotifyAuth.post('/api/token', {
      'grant_type': 'authorization_code',
      'code': `${code}`,
      'redirect_uri': `${import.meta.env.VITE_SPOTIFY_REDIRECT_URI}`
    })
  }

  async getUserProfile (accessToken: string): Promise<GetUserResult> {
    return await this.spotifyApi.get('/me', {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    })
  }
}
