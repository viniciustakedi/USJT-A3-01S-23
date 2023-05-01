export type GetUserResult = {
  data: {
    display_name: string
    external_urls: {}
    id: string
    images: {
      height: number | null
      width: number | null
      url: string | null
    }[]
    type: string
    uri: string
  }
}
