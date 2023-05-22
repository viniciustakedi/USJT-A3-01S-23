import axios, { AxiosInstance } from 'axios'
import qs from 'qs'
import { SpotifyArtistResult } from '../types/spotify/SpotifyArtist'
import { SpotifyTrackResult } from '../types/spotify/SpotifyTrack'
import { UserResult } from '../types/users/UserResult'

type CreateUserParams = {
  name: string
  spotifyId: string
  uri: string
  imageUrl: string
  artists: SpotifyArtistResult[]
  tracks: SpotifyTrackResult[]
}

export class UserClient {
  private axios: AxiosInstance

  constructor() {
    this.axios = axios.create({
      baseURL: 'http://localhost:5000',
      paramsSerializer: params => qs.stringify(params, { arrayFormat: 'repeat' })
    })
  }

  async create(params: CreateUserParams): Promise<UserResult> {
    return (await this.axios.post('/users', params)).data
  }

  async getUserById(id: number): Promise<UserResult> {
    return (await this.axios.get(`/users/${id}`)).data
  }

  async getUsersPage(): Promise<UserResult[]> {
    return (await this.axios.get('/users')).data
  }
}
