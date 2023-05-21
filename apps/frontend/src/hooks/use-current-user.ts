import { TrackResult } from 'api-client/src/types/tracks/TrackResult'
import { UserResult } from 'api-client/src/types/users/UserResult'
import { useNavigate } from 'react-router-dom'

export function useCurrentUser() {
  const getLocalStorageUser = localStorage.getItem('user');
  const getLocalStorageTracks = localStorage.getItem('tracks');
  const navigate = useNavigate()

  if (!getLocalStorageUser) {
    navigate('/')
  }

  const user = JSON.parse(getLocalStorageUser!) as UserResult;
  const tracks = JSON.parse(getLocalStorageTracks!) as TrackResult[];

  return { user, tracks };
}
