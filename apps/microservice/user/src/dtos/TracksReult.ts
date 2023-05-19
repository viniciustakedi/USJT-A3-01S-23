export class TracksResult {
  name: string
  uri: string
  album: {
    name: string
    images: {
      url: string
    }[]
    release_date: string
    album_type: 'ALBUM' | 'SINGLE'
  }
}
