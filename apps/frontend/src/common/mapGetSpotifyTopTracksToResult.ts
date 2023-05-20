import { SpotifyTrack, SpotifyTrackResult } from 'api-client/src/types/spotify/SpotifyTrack'

export function mapGetSpotifyTopTracksToResult(track: SpotifyTrack): SpotifyTrackResult {
  return {
    spotifyId: track.id,
    name: track.name,
    uri: track.uri,
    duration: track.duration_ms,
    albumName: track.album.name,
    imageUrl: track.album.images[0].url
  }
}
