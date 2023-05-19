export type SpotifyTrack = {
  spotify_id: string
  name: string
  uri: string
  duration_ms: number
  album: {
    name: string
    images: {
      url: string
    }[]
    release_date: string
    album_type: 'ALBUM' | 'SINGLE'
  }
}
