import UserCard from '../UserCard/UserCard'
import { TrackResult } from 'api-client/src/types/tracks/TrackResult'
import { ArtistsResult } from 'api-client/src/types/artists/ArtistsResult'
import ArtistAvatarTooltip from '../ArtistAvatarTooltip/ArtistAvatarTooltip'
import Badge from '../Badge/Badge'
import { CircularProgress } from '@mui/material'
import { UserResult } from 'api-client/src/types/users/UserResult'

export type UserCompareBoxProps = {
  userResult?: {
    user: UserResult;
    tracks: TrackResult[];
    artists: ArtistsResult[];
  }
  isLoading?: boolean
}

export default function UserDataBox(props: UserCompareBoxProps) {
  const { userResult } = props

  return (
    <div className='w-full bg-baseBlack p-2 md:p-4 rounded-lg h-full relative'>
      {props.isLoading && (
        <CircularProgress className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' />
      )}
      {!props.isLoading && userResult && (
      <>
        <UserCard
          name={userResult.user.name}
          imageUrl={userResult.user.imageUrl}
          variant='static'
          dark
        />
        <div className='flex flex-col justify-between'>
          <div className='my-10'>
            <h2 className='text-center mb-6'>
              Músicas favoritas de {userResult.user.name}
            </h2>
            <div className='flex flex-wrap gap-2'>
              {userResult.tracks.slice(0, 12).map(track => (
                <Badge
                  key={track.id}
                  label={track.name} />
              ))}
            </div>
          </div>
          <div>
            <h2 className='text-center mb-6'>
              Top 5 artistas favoritos
            </h2>
            <div className='flex flex-wrap gap-4 justify-center'>
              {userResult.artists.slice(0, 5).map(artist => (
                <ArtistAvatarTooltip
                  key={artist.id}
                  name={artist.name}
                  imageUrl={artist.imageUrl}
                  id={artist.id}
                  uri={artist.uri} />
              ))}
            </div>
          </div>
        </div>
        </>
        )}
    </div>
  )
}
