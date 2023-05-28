import { LinearProgress } from '@mui/material'
import UserDataBox from '../../components/UserDataBox'
import { useCurrentUser } from '../../hooks/use-current-user'
import { useClient } from '../../hooks/use-client'
import { useAsync } from 'react-async-hook'
import { useParams } from 'react-router-dom'
import UsersCompareDataBox from '../../components/UsersCompareDataBox'

export default function CompareDataPage() {
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
  console.log("🚀 ~ file: CompareDataPage.tsx:22 ~ CompareDataPage ~ compareUserResult:", compareUserResult)

  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-2'>
      <div>
        <UserDataBox
          userResult={{ user, tracks, artists }}
        />
      </div>
      <div>
        <UserDataBox
          userResult={compareUserResult}
          isLoading={getCompareUser.loading}
        />
      </div>
      <div className=' lg:col-span-2'>
        {getCompareUser.loading && <LinearProgress />}
        {compareUserResult && <UsersCompareDataBox data={compareUserResult} />}
      </div>
    </div>
  )
}
