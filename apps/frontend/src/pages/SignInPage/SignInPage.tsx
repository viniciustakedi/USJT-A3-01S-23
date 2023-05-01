import { Button } from '@mui/material'

const spotifyClientId = import.meta.env.VITE_SPOTIFY_CLIENT_ID
const spotifyRedirectUri = import.meta.env.VITE_SPOTIFY_REDIRECT_URI

export default function SignInPage() {
  const authUrl = `https://accounts.spotify.com/authorize?client_id=${spotifyClientId}&response_type=code&redirect_uri=${spotifyRedirectUri}&scope=user-top-read`

  return (
    <Button variant='contained' href={authUrl}>
      Login com spotify
    </Button>
  )
}
