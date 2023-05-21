import { Grid, LinearProgress } from '@mui/material'
import UserCompareBox from '../../components/UserCompareBox'
import { useCurrentUser } from '../../hooks/use-current-user'
import { useClient } from '../../hooks/use-client'
import { useAsync } from 'react-async-hook'
import { useParams } from 'react-router-dom'

export default function CompareDataPage () {
  const { user, tracks } = useCurrentUser()
  const { id } = useParams<{ id: string }>()
  const client = useClient()

  const getCompareUser = useAsync(async () => {
    const user = await client.user.getUserById(parseInt(id!))
    const tracks = await client.tracks.getUserTracks(parseInt(id!))
    return { user, tracks }
  }, [])

  const compareUserResult = getCompareUser.result

  return (
    <Grid container spacing={8}>
      <Grid item xs={12} md={6}>
        <UserCompareBox
          name={user.name}
          imageUrl={user.imageUrl}
          tracks={tracks}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        {getCompareUser.loading && <LinearProgress />}
        {compareUserResult && (
          <UserCompareBox
            name={compareUserResult.user.name}
            imageUrl={compareUserResult.user.imageUrl}
            tracks={compareUserResult.tracks}
          />
        )}
      </Grid>
      <Grid item xs={12}>

      </Grid>

    </Grid>
  )
}
