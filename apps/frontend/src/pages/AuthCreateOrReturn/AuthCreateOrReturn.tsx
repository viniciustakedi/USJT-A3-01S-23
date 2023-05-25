import { useNavigate, useSearchParams } from 'react-router-dom'
import { useClient } from '../../hooks/use-client'
import { useAsyncCallback } from 'react-async-hook'
import { mapGetSpotifyTopTracksToResult } from '../../common/mapGetSpotifyTopTracksToResult'
import { useEffect } from 'react'
import { CircularProgress, Grid, Typography } from '@mui/material'
import { mapGetSpotifyArtistsToResult } from '../../common/mapGetSpotifyArtistsToResult'

export default function AuthCreateOrReturn() {
  const client = useClient()
  const navigate = useNavigate()
  const [queryParams] = useSearchParams()

  const codeValue = queryParams.get('code') as string

  const returnDataSuccess = useAsyncCallback(async () => {
    const accessToken = await client.spotify.getAccessToken(codeValue)
    const profile = await client.spotify.getUserProfile(accessToken.access_token)
    const topArtists = await client.spotify.getUserTopArtists(accessToken.access_token)
    const topTracks = await client.spotify.getUserTopTracks(accessToken.access_token)

    const createOrUpdateUser = await client.user.create({
      name: profile.display_name,
      spotifyId: profile.id,
      uri: profile.uri,
      imageUrl: profile.images[0].url,
      artists: topArtists.items.map(mapGetSpotifyArtistsToResult),
      tracks: topTracks.items.map(mapGetSpotifyTopTracksToResult)
    })

    console.log(topArtists.items.map(mapGetSpotifyArtistsToResult))

    const user = await client.user.getUserById(createOrUpdateUser.id)
    const tracks = await client.tracks.getUserTracks(createOrUpdateUser.id)
    const artists = await client.artists.getArtistsByUserId(createOrUpdateUser.id)

    sessionStorage.setItem('user', JSON.stringify(user))
    sessionStorage.setItem('tracks', JSON.stringify(tracks))
    sessionStorage.setItem('artists', JSON.stringify(artists))
    sessionStorage.setItem('userIsAuth', 'true')

    navigate('/usuario')
  })

  useEffect(() => {
    if(window.location) {
      returnDataSuccess.execute()
    }
  }, [window.location])

  return (
    <>
      <div className='bg-secondary container mx-auto w-full flex items-center justify-center text-center h-screen'>
        <div>
          <h2 className='text-4xl text-white mb-4'>Aguarde um instante, você será redirecionado</h2>
          <CircularProgress size={60}/>
        </div>
      </div>
    </>
  )
}
