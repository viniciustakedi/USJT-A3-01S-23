import { Box, Chip } from '@mui/material'
import ArtistAvatarTooltip from '../ArtistAvatarTooltip'
import { useCurrentUser } from '../../hooks/use-current-user'
import { ArtistsResult } from 'api-client/src/types/artists/ArtistsResult'
import { TrackResult } from 'api-client/src/types/tracks/TrackResult'

interface UserCompareResultProps {
  data: {
    artists: ArtistsResult[],
    tracks: TrackResult[]
  }
}

const UsersCompareDataBox: React.FC<UserCompareResultProps> = ({ data }) => {
  const currentUser = useCurrentUser();

  const matchArtists = [
    ...currentUser.artists.slice(currentUser.artists.length - 3, currentUser.artists.length),
    ...data.artists.slice(data.artists.length - 3, data.artists.length)
  ];

  const currentUserGenres = currentUser.artists.map(e => e.genres[0]);
  const matchUserGenres = data.artists.map(e => e.genres[0]);

  const commonGenresFilter = currentUserGenres.filter(genre => matchUserGenres.includes(genre));

  const commonGenres = commonGenresFilter.filter(function (este, i) {
    return commonGenresFilter.indexOf(este) === i;
  });

  const matchGenres = [
    ...commonGenres,
    ...currentUserGenres.slice(currentUserGenres.length - 6, currentUserGenres.length),
    ...matchUserGenres.slice(matchUserGenres.length - 6, matchUserGenres.length)
  ].filter(e => e !== undefined);

  const matchMusics = [
    ...currentUser.tracks.slice(currentUser.tracks.length - 6, currentUser.tracks.length),
    ...data.tracks.slice(data.tracks.length - 6, data.tracks.length)
  ]

  return (
    <Box
      sx={{
        width: '100%',
        backgroundColor: 'primary.main',
        px: { xs: '8px', md: '30px' },
        py: { xs: '20px', md: '40px' },
        borderRadius: '16px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '2rem'
      }}
    >
      <h1 className='text-3xl font-bold text-white'>
        Artistas favoritos entre vocês
      </h1>
      <div className='flex justify-center items-center gap-4'>
        {matchArtists.slice(0, 5).map((artist: any) => (
          <ArtistAvatarTooltip
            key={artist.id}
            name={artist.name}
            imageUrl={artist.imageUrl}
            id={artist.id}
            uri={artist.uri} />
        ))}
      </div>
      <h1 className='text-3xl font-bold text-white'>
        Generos que vocês podem se dar bem
      </h1>
      <div className='w-3/5'>
        {(
          matchGenres.map(e => {
            return (
              <Chip className='p-1 capitalize text-md font-bold text-white mx-1 my-1' label={e} />
            )
          })
        )}
      </div>
      <h1 className='text-3xl font-bold text-white'>
        Musicas que vocês possam gostar
      </h1>
      <div className='w-3/5'>
        {(
          matchMusics.map(e => {
            return (
              <Chip className='p-1 capitalize text-md font-bold text-white mx-1 my-1' label={e.name} />
            )
          })
        )}
      </div>
    </Box>
  )
}

export default UsersCompareDataBox;