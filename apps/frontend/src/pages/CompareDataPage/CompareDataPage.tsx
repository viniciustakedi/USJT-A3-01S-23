import { Grid, LinearProgress } from '@mui/material'
import UserDataBox from '../../components/UserDataBox'
import { useCurrentUser } from '../../hooks/use-current-user'
import { useClient } from '../../hooks/use-client'
import { useAsync } from 'react-async-hook'
import { useParams } from 'react-router-dom'
import UsersCompareDataBox from '../../components/UsersCompareDataBox'

export default function CompareDataPage () {
  const { user, tracks, artists } = useCurrentUser()
  const { id } = useParams<{ id: string }>()
  const client = useClient()

  const getCompareUser = useAsync(async () => {
    const user = await client.user.getUserById(parseInt(id!))
    const tracks = await client.tracks.getUserTracks(parseInt(id!))
    const artists = await client.artists.getArtistsByUserId(parseInt(id!))
    return { user, tracks, artists }
  }, [])

  const compareUserResult = getCompareUser.result

  const currentUserTop5Artists = artists.slice(0, 5)
  const compareUserTop5Artists = compareUserResult?.artists.slice(0, 5)

  return (
    <Grid container spacing={8}>
      <Grid item xs={12} md={6}>
        <UserDataBox
          name={user.name}
          imageUrl={user.imageUrl}
          tracks={tracks}
          artists={currentUserTop5Artists}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        {getCompareUser.loading && <LinearProgress />}
        {compareUserResult && (
          <UserDataBox
            name={compareUserResult.user.name}
            imageUrl={compareUserResult.user.imageUrl}
            tracks={compareUserResult.tracks}
            artists={compareUserTop5Artists || []}
          />
        )}
      </Grid>
      <Grid item xs={12}>
        {getCompareUser.loading && <LinearProgress />}
        {compareUserResult && <UsersCompareDataBox />}
      </Grid>
    </Grid>
  )
}
