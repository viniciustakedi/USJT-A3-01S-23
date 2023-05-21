import { Avatar, Box, Chip, Stack, Typography } from '@mui/material'
import UserCard from '../UserCard/UserCard'
import { TrackResult } from 'api-client/src/types/tracks/TrackResult'

export type UserCompareBoxProps = {
  name: string
  imageUrl: string
  tracks: TrackResult[]
}

export default function UserDataBox(props: UserCompareBoxProps) {
  return (
    <Box
      sx={{
        backgroundColor: 'primary.main',
        width: '100%',
        px: { xs: '8px', md:'30px' },
        py: { xs: '20px', md:'40px' },
        borderRadius: '16px',
        height: '100%'
      }}
    >
      <UserCard
        name={props.name}
        imageUrl={props.imageUrl}
        variant='static'
        dark
      />
      <Box
        sx={{
          my: '40px',
          minHeight: '220px',
        }}
      >
        <Typography variant='h2' mb='16px' textAlign='center' fontWeight={700}>
          Músicas favoritas de {props.name}
        </Typography>
        {props.tracks.map(track => (
          <Chip
            key={track.id}
            label={track.name}
            sx={{
              color: 'white'
            }}
          />
        ))}
      </Box>
      <Box>
        <Typography variant='h2' mb='16px' textAlign='center' fontWeight={700}>
        Top 5 artistas favoritos
        </Typography>
        <Stack
          direction='row'
          spacing={2}
          alignItems='center'
          justifyContent='center'
          flexWrap='wrap'
        >
          <Avatar />
          <Avatar />
          <Avatar />
          <Avatar />
          <Avatar />
        </Stack>
      </Box>
    </Box>
  )
}
