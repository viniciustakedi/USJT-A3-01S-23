import { RouterProvider } from 'react-router-dom'
import CustomThemeProvider from './components/CustomThemeProvider/CustomThemeProvider'
import { router } from './router'
import { CssBaseline } from '@mui/material'

function App() {

  return (
    <CustomThemeProvider>
      <CssBaseline />
      <RouterProvider router={router} />
    </CustomThemeProvider>
  )
}

export default App
