import { Button, Container, Stack, TextField, Typography } from '@mui/material'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { useClient } from '../../hooks/use-client'
import { useAsyncCallback } from 'react-async-hook'

export default function SignInPage() {
  const client = useClient()

  const helloWorld = useAsyncCallback(async () => {
    await client.user.helloWorld()
    await client.musicData.helloWorld()
  })

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: yup.object().shape({
      email: yup.string().email().required(),
      password: yup.string().required()
    }),
    onSubmit: (values) => {
      console.log(values)
      window.alert('Entrou no sistema')
    }
  })
  return (
    <Container
      maxWidth="sm"
      sx={{
        backgroundColor: 'white',
        padding: '16px',
        borderRadius: '8px'
      }}
    >
      <Typography
        textAlign='center'
        variant='h1'
      >
        Bem vindo!
      </Typography>
      <Typography
        variant='h3'
        mb='32px'
      >
        Obtenha insights sobre suas musicas artistas e muito mais
      </Typography>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          label='Email'
          name='email'
          value={formik.values.email}
          onChange={formik.handleChange}
          fullWidth
          sx={{
            mb: '16px'
          }}
        />
        <TextField
          label='Senha'
          name='password'
          value={formik.values.password}
          onChange={formik.handleChange}
          fullWidth
        />
        <Stack
          sx={{
            mt: '16px'
          }}
        >
          <Button variant='contained' type='submit'>
            Entrar
          </Button>
          <Button variant='text' sx={{ mt: '8px' }} onClick={() => helloWorld.execute()}>
            Nao possue conta? Crie uma
          </Button>
        </Stack>
      </form>
    </Container>
  )
}
