import { useSearchParams } from 'react-router-dom'
import { useClient } from '../../hooks/use-client'
import { useAsyncCallback } from 'react-async-hook'
import { Button, LinearProgress } from '@mui/material'
import { mapGetSpotifyTopTracksToResult } from '../../common/mapGetSpotifyTopTracksToResult'

export default function DashboardPage() {
  const client = useClient()
  const [queryParams] = useSearchParams()

  const codeValue = queryParams.get('code') as string

  const getUserProfile = useAsyncCallback(async () => {
    try {
      const accessToken = await client.spotify.getAccessToken(codeValue)
      const profile = await client.spotify.getUserProfile(accessToken.access_token)
      const topArtists = await client.spotify.getUserTopArtists(accessToken.access_token)
      const topTracks = await client.spotify.getUserTopTracks(accessToken.access_token)

      await client.user.create({
        name: profile.display_name,
        spotifyId: profile.id,
        uri: profile.uri,
        imageUrl: profile.images[0].url,
        artists: topArtists.items,
        tracks: topTracks.items.map(mapGetSpotifyTopTracksToResult)
      })

      console.log('usuario criado no banco de dados com sucesso')

      return { profile, topArtists, topTracks }
    } catch {
      console.log('error')
    }
  })

  return (
    <>
      {!getUserProfile.result && (
        <Button onClick={getUserProfile.execute} variant='outlined'>
          Executar
        </Button>
      )}
      {getUserProfile.loading && <LinearProgress />}
      {getUserProfile.error && <p>Erro ao carregar</p>}
      {getUserProfile.result && (
        <>
          <p>nome: {getUserProfile.result.profile.display_name}</p>
          <p>id spotify: {getUserProfile.result.profile.id}</p>
          <p>uri spotify: {getUserProfile.result.profile.uri}</p>
          <img src={getUserProfile.result.profile.images[0].url || ''} alt="profile" />
        </>
      )}
    </>
  )
}
