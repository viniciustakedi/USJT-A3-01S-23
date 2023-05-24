import { Box, Chip, Grid, LinearProgress, Stack, Typography } from '@mui/material'
import { useCurrentUser } from '../../hooks/use-current-user'
import UserCard from '../../components/UserCard/UserCard'
import { useAsync } from 'react-async-hook'
import { useClient } from '../../hooks/use-client'
import ArtistAvatarTooltip from '../../components/ArtistAvatarTooltip'
import GenreChart from '../../components/GenreChart/GenreChart'

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

    return Object.entries(genresCount)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 10);
  }

  const getUserPage = useAsync(async () => {
    return await client.user.getUsersPage();
  }, [])

  return (
    <Grid container spacing='60px'>
      <Grid item xs={12} md={6}>
        <UserCard
          name={user.name}
          imageUrl={user.imageUrl}
          id={user.id}
          variant={'static'}
          redirectUrl={user.id.toString()}
        />
        <Box
          sx={{
            backgroundColor: '#5B5B5B',
            width: '100%',
            padding: '16px',
            borderRadius: '16px',
            mt: '15px'
          }}
        >
          <Typography variant='h2' mb='16px' color='white'>
            Suas musicas favoritas:
          </Typography>
          <Grid container gap={1}>
            {
              tracks.map(track => (
                <Chip
                  key={track.id}
                  label={track.name}
                  sx={{
                    color: 'white'
                  }}
                />
              ))
            }
          </Grid>
        </Box>
        <Box sx={{ mt: '35px' }}>
          <Typography variant='h2' color='white' mb='16px'>
            Artistas mais ouvidos:
          </Typography>
          <Grid container gap={2}>
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
          </Grid>
        </Box>
        <Box sx={{ mt: '35px' }}>
          <Typography variant='h2' color='white' mt='20px' sx={{ mb: '20px' }}>
            Generos musicais que você curte:
          </Typography>
          <GenreChart data={getGenres()} />
        </Box>
      </Grid>
      <Grid item xs={12} md={6}>
        <Box
          sx={{
            backgroundColor: 'primary.main',
            borderRadius: '16px',
            p: { xs: '8px', md: '30px' },
            minHeight: '100%'
          }}
        >
          <Typography variant='h1' textAlign='center' mb='16px' color="#FFF">
            Comparar com amigos
          </Typography>
          {getUserPage.loading && <LinearProgress color='secondary' />}
          {getUserPage.result && (
            <Stack spacing='8px'>
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
            </Stack>
          )}
        </Box>
      </Grid>
    </Grid>
  )
}
