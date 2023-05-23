import { ArtistsResult } from 'api-client/src/types/artists/ArtistsResult'
import { TrackResult } from 'api-client/src/types/tracks/TrackResult'
import { UserResult } from 'api-client/src/types/users/UserResult'
import { useNavigate } from 'react-router-dom'

export function useCurrentUser() {
  const getLocalStorageUser = sessionStorage.getItem('user');
  const getLocalStorageTracks = sessionStorage.getItem('tracks');
  const getLocalStorageArtists = sessionStorage.getItem('artists');
  const userIsAuth = Boolean(sessionStorage.getItem('userIsAuth'));
  const navigate = useNavigate()

  if (!userIsAuth) {
    navigate('/')
  }

  const user = JSON.parse(getLocalStorageUser!) as UserResult;
  const tracks = JSON.parse(getLocalStorageTracks!) as TrackResult[];
  const artists = JSON.parse(getLocalStorageArtists!) as ArtistsResult[];

  return { user, tracks, artists };
}
