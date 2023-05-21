import { Box } from '@mui/material'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <Box sx={{ p: '30px' }}>
      <Outlet />
    </Box>
  )
}
