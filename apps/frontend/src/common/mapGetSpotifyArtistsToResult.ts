import { SpotifyArtist, SpotifyArtistResult } from 'api-client/src/types/spotify/SpotifyArtist'

export function mapGetSpotifyArtistsToResult(artist: SpotifyArtist): SpotifyArtistResult {
  return {
    spotifyId: artist.id,
    name: artist.name,
    uri: artist.uri,
    imageUrl: artist.images[0].url,
    genres: artist.genres
  }
}
