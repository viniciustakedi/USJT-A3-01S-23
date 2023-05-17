import { useSearchParams } from 'react-router-dom'
import { useClient } from '../../hooks/use-client'
import { useAsyncCallback } from 'react-async-hook'
import { Button, LinearProgress } from '@mui/material'

export default function DashboardPage() {
  const client = useClient()
  const [queryParams] = useSearchParams()

  const codeValue = queryParams.get('code') as string

  const getUserProfile = useAsyncCallback(async () => {
    try {
      const accessToken = await client.spotify.getAccessToken(codeValue)
      const profile = await client.spotify.getUserProfile(accessToken.data.access_token)
      const topArtists = await client.spotify.getUserTopArtists(accessToken.data.access_token)
      const topTracks = await client.spotify.getUserTopTracks(accessToken.data.access_token)

      await client.user.create({
        name: profile.data.display_name,
        spotify_id: profile.data.id,
        spotify_uri: profile.data.uri
      })

      console.log('usuario criado no banco de dados com sucesso')

      return { profile, topArtists, topTracks }
    } catch {
      console.log('error')
    }
  })

  return (
    <>
      <Button onClick={getUserProfile.execute} variant='text'>
        Executar
      </Button>
      {getUserProfile.loading && <LinearProgress />}
      {getUserProfile.error && <p>Erro ao carregar</p>}
      {getUserProfile.result && (
        <>
          <p>nome: {getUserProfile.result.profile.data.display_name}</p>
          <p>id spotify: {getUserProfile.result.profile.data.id}</p>
          <p>uri spotify: {getUserProfile.result.profile.data.uri}</p>
          <img src={getUserProfile.result.profile.data.images[0].url || ''} alt="profile" />
          <h2>Artista favoritos</h2>
          <ul>
            {getUserProfile.result.topArtists.data.items.map(artist => (
              <li>
                {artist.name}
              </li>
            ))}
          </ul>
          <h2>Generos favoritos</h2>
          <ul>
            {getUserProfile.result.topArtists.data.items.map(artist => artist.genres.map(genre => genre).join(', ')).sort()}
          </ul>
          <h2>Tracks favoritas</h2>
          <ul>
            {getUserProfile.result.topTracks.data.items.map(track => (
              <li>
                <b>{track.name}</b> - {track.album.name}
                <ul>
                  <li>
                    Data de lançamento - {track.album.release_date}
                  </li>
                  <li>
                    Duração (ms) - {track.duration_ms}
                  </li>
                  <br />
                </ul>
              </li>
            )).sort()}
          </ul>
        </>
      )}
    </>
  )
}
