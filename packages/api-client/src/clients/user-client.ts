import axios, { AxiosInstance } from 'axios'
import qs from 'qs'

type CreateUserParams = {
  name: string
  spotify_id: string
  spotify_uri: string
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
    return await this.axios.post('/create', params)
  }
}
