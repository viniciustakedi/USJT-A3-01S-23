import { Avatar, Box, Chip, Container, Stack, Typography } from '@mui/material'

export default function UsersCompareDataBox() {
  return (
    <Box
      sx={{
        width: '100%',
        backgroundColor: 'primary.main',
        px: { xs: '8px', md:'30px' },
        py: { xs: '20px', md:'40px' },
        borderRadius: '16px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <Typography
        variant='h2'
        sx={{
          color: 'secodary',
          fontWeight: 700,
          mb: '30px'
        }}
      >
        Artistas favoritos entre vocês
      </Typography>
      <Stack direction='row' spacing='16px' flexWrap='wrap'>
        <Avatar />
        <Avatar />
        <Avatar />
        <Avatar />
        <Avatar />
      </Stack>
      <Typography
        variant='h2'
        sx={{
          color: 'secodary',
          fontWeight: 700,
          mt: '60px',
          mb: '30px'
        }}
      >
        Generos musicais que vocês podem se dar bem
      </Typography>
      <Container maxWidth='xs'>
        <Chip label='Chip' variant='outlined' color='secondary' />
        <Chip label='Chip' />
        <Chip label='Chip' />
        <Chip label='Chip' />
        <Chip label='Chip' />
        <Chip label='Chip' />
        <Chip label='Chip' />
        <Chip label='Chip' />
        <Chip label='Chip' />
        <Chip label='Chip' />
        <Chip label='Chip' />
        <Chip label='Chip' />
      </Container>
      <Typography
        variant='h2'
        sx={{
          color: 'secodary',
          fontWeight: 700,
          mt: '60px',
          mb: '30px'
        }}
      >
        Musicas que vocês gostam em comum
      </Typography>
    </Box>
  )
}
