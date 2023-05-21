import axios, { AxiosInstance } from 'axios'
import qs from 'qs'
import { TrackResult } from '../types/tracks/TrackResult'

export class TracksClient {
  private axios: AxiosInstance

  constructor() {
    this.axios = axios.create({
      baseURL: 'http://localhost:5001',
      paramsSerializer: params => qs.stringify(params, { arrayFormat: 'repeat' })
    })
  }

  async getUserTracks(id: number): Promise<TrackResult> {
    return (await this.axios.get(`/tracks/${id}`)).data
  }
}
