import { Avatar, ButtonBase, Grid, Stack, Typography, Link } from '@mui/material'

type UserCardProps = {
  name: string
  imageUrl: string
  id: number
  variant: 'redirect' | 'static'
  dark?: boolean
  redirectUrl?: string
}

export default function UserCard(props: UserCardProps) {
  return (
    <>
    {props.variant === 'redirect' && (
      <Link href={props.redirectUrl} underline='none' color='secondary.main'>
        <ButtonBase
          sx={{ borderRadius: '16px', width: '100%' }}
        >
            <Grid
              container
              alignItems='center'
              sx={{
                width: '100%',
                py: '15px',
                px: '26px',
                borderRadius: '16px',
                backgroundColor: props.dark ? 'secondary.main' : 'primary.main',
                height: 'auto'
              }}
            >
              <Grid item>
                <Stack direction='row' spacing={2} alignItems='center'>
                  <Avatar src={props.imageUrl} />
                  <Typography variant='h2' color={props.dark ? 'white' : 'primary'}>
                    {props.name}
                  </Typography>
                </Stack>
              </Grid>
            </Grid>
        </ButtonBase>
      </Link>
    )}
    {props.variant === 'static' && (
      <Grid
        container
        alignItems='center'
        sx={{
          width: '100%',
          py: '15px',
          px: '26px',
          borderRadius: '16px',
          backgroundColor: props.dark ? 'secondary.main' : 'primary.main',
          height: 'auto'
        }}
      >
        <Grid item>
          <Stack direction='row' spacing={2} alignItems='center'>
            <Avatar src={props.imageUrl} />
            <Typography variant='h2' color={props.dark ? 'white' : 'secondary'}>
              {props.name}
            </Typography>
          </Stack>
        </Grid>
      </Grid>
    )}
    </>
  )
}
