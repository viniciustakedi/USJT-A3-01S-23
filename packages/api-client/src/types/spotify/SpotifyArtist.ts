export type SpotifyArtist = {
  genres: string[]
  name: string
  images: {
    url: string
  }[]
  id: string
  uri: string
}

export type SpotifyArtistResult = {
  spotifyId: string
  name: string
  uri: string
  imageUrl: string
  genres: string[]
}
