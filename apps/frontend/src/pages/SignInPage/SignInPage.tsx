import { Button, Grid, Typography } from '@mui/material'
import { BsSpotify } from "react-icons/bs";
import './sign-in-style.scss'

const spotifyClientId = import.meta.env.VITE_SPOTIFY_CLIENT_ID
const spotifyRedirectUri = import.meta.env.VITE_SPOTIFY_REDIRECT_URI

export default function SignInPage() {
  const authUrl = `https://accounts.spotify.com/authorize?client_id=${spotifyClientId}&response_type=code&redirect_uri=${spotifyRedirectUri}&scope=user-top-read`

  return (
    <Grid className='sign-in-container' container>
      <Grid className='sign-in-title' item xs={12}>
        <Typography id="sign-in-title-text">
          Descubra seu novo
          melhor parceiro(a) de
          música!
        </Typography>
      </Grid>
      <Grid className='sign-in-button' item xs={12}>
        <Button id='sign-in-button-login' href={authUrl}>
          <BsSpotify id="icon-spotify" size={24} />
          Conecte-se com Spotify
        </Button>
      </Grid>
    </Grid>
  )
}
