export type SpotifyTrack = {
  id: string
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

export type SpotifyTrackResult = {
  name: string
  uri: string
  duration: number
  albumName: string
  imageUrl: string
  spotifyId: string
}
