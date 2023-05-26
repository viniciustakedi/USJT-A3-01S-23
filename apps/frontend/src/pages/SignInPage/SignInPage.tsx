import { BsSpotify } from 'react-icons/bs'
import './sign-in-style.scss'

const spotifyClientId = import.meta.env.VITE_SPOTIFY_CLIENT_ID
const spotifyRedirectUri = import.meta.env.VITE_SPOTIFY_REDIRECT_URI

export default function SignInPage() {
  const authUrl = `https://accounts.spotify.com/authorize?client_id=${spotifyClientId}&response_type=code&redirect_uri=${spotifyRedirectUri}&scope=user-top-read`

  return (
    <div className='sign-in-container'>
      <div className='sign-in-title'>
        <div id="sign-in-title-text">
          Descubra seu novo
          melhor parceiro(a) de
          música!
        </div>
      </div>
      <div className='sign-in-button'>
        <button id='sign-in-button-login'>
          <a href={authUrl} className='flex gap-2 items-center justify-center'>
            <BsSpotify id="icon-spotify" size={24} />
            Conecte-se com Spotify
          </a>
        </button>
      </div>
    </div>
  )
}
