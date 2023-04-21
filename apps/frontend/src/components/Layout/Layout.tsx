import { Box, Container } from '@mui/material'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <Box>
      <Container maxWidth='lg'>
        <Outlet />
      </Container>
    </Box>
  )
}
