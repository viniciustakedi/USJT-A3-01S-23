import { SpotifyTrack } from 'api-client/src/types/spotify/SpotifyTrack'

export function mapGetSpotifyTopTracksToResult(track: SpotifyTrack): SpotifyTrack {
  return {
    spotify_id: track.spotify_id,
    name: track.name,
    uri: track.uri,
    duration_ms: track.duration_ms,
    album: {
      name: track.album.name,
      images: track.album.images,
      release_date: track.album.release_date,
      album_type: track.album.album_type
    }
  }
}
