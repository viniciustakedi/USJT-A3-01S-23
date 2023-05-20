import axios, { AxiosInstance } from 'axios'
import qs from 'qs'
import { SpotifyArtist } from '../types/spotify/SpotifyArtist'
import { SpotifyTrackResult } from '../types/spotify/SpotifyTrack'

type CreateUserParams = {
  name: string
  spotifyId: string
  uri: string
  imageUrl: string
  artists: SpotifyArtist[]
  tracks: SpotifyTrackResult[]
}

export class UserClient {
  private axios: AxiosInstance

  constructor() {
    this.axios = axios.create({
      baseURL: 'http://localhost:5001',
      paramsSerializer: params => qs.stringify(params, { arrayFormat: 'repeat' })
    })
  }

  async create(params: CreateUserParams) {
    return await this.axios.post('/users', params)
  }
}
