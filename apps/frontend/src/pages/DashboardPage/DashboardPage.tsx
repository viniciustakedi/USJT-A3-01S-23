import { useSearchParams } from 'react-router-dom'
import { useClient } from '../../hooks/use-client'
import { useAsyncCallback } from 'react-async-hook'
import { Button, LinearProgress } from '@mui/material'

export default function DashboardPage() {
  const client = useClient()
  const [queryParams] = useSearchParams()

  const codeValue = queryParams.get('code') as string

  const getUserProfile = useAsyncCallback(async () => {
    try {
      const accessToken = await client.spotify.getAccessToken(codeValue)
      return await client.spotify.getUserProfile(accessToken.data.access_token)
    } catch {
      console.log('error')
    }
  })

  return (
    <>
      <Button
        variant='outlined'
        onClick={() => getUserProfile.execute()}
      >
        Meu perfil
      </Button>
      {getUserProfile.loading && <LinearProgress />}
      {getUserProfile.error && <p>Erro ao carregar</p>}
      {getUserProfile.result && (
        <>
          <p>nome: {getUserProfile.result.data.display_name}</p>
          <p>id spotify: {getUserProfile.result.data.id}</p>
          <p>uri spotify: {getUserProfile.result.data.uri}</p>
          <img src={getUserProfile.result.data.images[0].url || ''} alt="profile" />
        </>
      )}
    </>
  )
}
