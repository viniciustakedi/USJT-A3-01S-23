import axios, { AxiosInstance } from 'axios'
import qs from 'qs'
import { ArtistsResult } from '../types/artists/ArtistsResult'

export class ArtistsClient {
  private axios: AxiosInstance

  constructor() {
    this.axios = axios.create({
      baseURL: `${import.meta.env.VITE_ARTISTS_API_URL}`|| 'http://localhost:5002',
      paramsSerializer: params => qs.stringify(params, { arrayFormat: 'repeat' })
    })
  }

  async getArtistsByUserId(id: number): Promise<ArtistsResult[]> {
    return (await this.axios.get(`/artists/${id}`)).data
  }
}
