import axios, { AxiosInstance } from 'axios'
import qs from 'qs'

export class MusicDataClient {
  private axios: AxiosInstance

  constructor() {
    this.axios = axios.create({
      baseURL: 'http://localhost:5001',
      paramsSerializer: params => qs.stringify(params, { arrayFormat: 'repeat' })
    })
  }

  async helloWorld() {
    return await this.axios.get('/tracks')
  }
}
