import { LinearProgress } from '@mui/material'
import { useCurrentUser } from '../../hooks/use-current-user'
import UserCard from '../../components/UserCard/UserCard'
import { useAsync } from 'react-async-hook'
import { useClient } from '../../hooks/use-client'
import GenreChart from '../../components/GenreChart/GenreChart'
import Badge from '../../components/Badge'
import ArtistAvatarTooltip from '../../components/ArtistAvatarTooltip'
import { FaUserFriends } from 'react-icons/fa'

export default function UserPage() {
  const { user, tracks, artists } = useCurrentUser()
  const client = useClient()

  const getGenres = () => {
    const genres = artists.map(artist => artist.genres);
    const genresCount = genres.reduce((acc, cur) => {
      cur.forEach(genre => {
        if (acc[genre]) {
          acc[genre] += 1
        } else {
          acc[genre] = 1
        }
      })
      return acc
    }, {} as { [key: string]: number });

    const result = Object.keys(genresCount).map(key => ({
      name: key,
      value: genresCount[key]
    }))

    return result.sort((a, b) => b.value - a.value).slice(0, 10)
  }

  const getUserPage = useAsync(async () => {
    return await client.user.getUsersPage();
  }, [])

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
      <div className=''>
        <UserCard
          name={user.name}
          imageUrl={user.imageUrl}
          id={user.id}
          variant={'static'}
          redirectUrl={user.id.toString()}
          isHeader={true}
        />
        <div className='bg-baseBlack mt-2 rounded-lg p-4'>
          <h2 className='mb-6'>
            Suas musicas favoritas:
          </h2>
          <div className='flex flex-wrap gap-2'>
            {
              tracks.map(track => (
                <Badge
                  key={track.id}
                  label={track.name}
                />
              ))
            }
          </div>
        </div>
        <div className='p-4'>
          <h2 className='mb-6'>
            Artistas mais ouvidos:
          </h2>
          <div className='flex flex-wrap gap-4 justify-center'>
            {
              artists.slice(0, 18).map(artist => (
                <ArtistAvatarTooltip
                  key={artist.id}
                  name={artist.name}
                  imageUrl={artist.imageUrl}
                  id={artist.id}
                  uri={artist.uri}
                />
              ))
            }
          </div>
        </div>
        <div className='p-4'>
          <h2>
            Generos musicais que você curte:
          </h2>
          <GenreChart data={getGenres()} />
        </div>
      </div>
      <div>
        <div className='min-h-full rounded-lg bg-baseBlack px-4 py-6'>
          <div className='flex justify-between items-center text-primary mb-6 px-1'>
            <h2 className='text-center'>
              Comparar com amigos
            </h2>
            <FaUserFriends size={20} />
          </div>
          {getUserPage.loading && <LinearProgress color='secondary' />}
          {getUserPage.result && (
            <div className='flex flex-col gap-2'>
              {getUserPage.result.map((user) => (
                <UserCard
                  key={user.id}
                  name={user.name}
                  imageUrl={user.imageUrl}
                  id={user.id}
                  dark
                  variant={'redirect'}
                  redirectUrl={`comparar/${user.id.toString()}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
