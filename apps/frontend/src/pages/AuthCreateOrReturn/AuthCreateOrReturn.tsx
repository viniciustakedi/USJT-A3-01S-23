import { useNavigate, useSearchParams } from 'react-router-dom'
import { useClient } from '../../hooks/use-client'
import { useAsync } from 'react-async-hook'
import { mapGetSpotifyTopTracksToResult } from '../../common/mapGetSpotifyTopTracksToResult'
import { useEffect, useState } from 'react'
import { CircularProgress, Grid, Typography } from '@mui/material'

export default function AuthCreateOrReturn() {
  const client = useClient()
  const navigate = useNavigate()
  const [queryParams] = useSearchParams()
  const [mounted, setMounted] = useState(false)

  const codeValue = queryParams.get('code') as string

  useEffect(() => {
    setMounted(true)
  })

  useAsync(async () => {
    try {
      const accessToken = await client.spotify.getAccessToken(codeValue)
      const profile = await client.spotify.getUserProfile(accessToken.access_token)
      const topArtists = await client.spotify.getUserTopArtists(accessToken.access_token)
      const topTracks = await client.spotify.getUserTopTracks(accessToken.access_token)

      const createOrUpdateUser = await client.user.create({
        name: profile.display_name,
        spotifyId: profile.id,
        uri: profile.uri,
        imageUrl: profile.images[0].url,
        artists: topArtists.items,
        tracks: topTracks.items.map(mapGetSpotifyTopTracksToResult)
      })

      const user = await client.user.getUserById(createOrUpdateUser.id)
      const tracks = await client.tracks.getUserTracks(user.id)

      localStorage.setItem('user', JSON.stringify(user))
      localStorage.setItem('tracks', JSON.stringify(tracks))

      navigate('/usuario')
    } catch {
      console.log('error')
    }
  }, [mounted])

  return (
    <Grid
      container
      direction='row'
      justifyContent='center'
      alignItems='center'
      sx={{
        height: '100vh',
        backgroundColor: '#191414'
      }}
    >
      <Grid item textAlign='center'>
        <Typography variant='h2' mb={4} sx={{ color: 'white' }}>
          Aguarde um instante, iremos te redirecionar
        </Typography>
        <CircularProgress size={60}/>
      </Grid>
    </Grid>
  )
}
