import { Box, CircularProgress, Grid, LinearProgress, Stack, Typography } from '@mui/material'
import { useCurrentUser } from '../../hooks/use-current-user'
import UserCard from '../../components/UserCard/UserCard'
import { useAsync } from 'react-async-hook'
import { useClient } from '../../hooks/use-client'

export default function UserPage() {
  const { user, tracks } = useCurrentUser()
  const client = useClient()

  const getUserPage = useAsync(async () => {
    const users = await client.user.getUsersPage()

    return users
  },[])

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
      </Grid>
      <Grid item xs={12} md={6}>
        <Box
          sx={{
            backgroundColor: 'primary.main',
            borderRadius: '16px',
            p: '50px',
            minHeight: '100vh'
          }}
        >
          <Typography variant='h1' textAlign='center' mb='16px'>
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
