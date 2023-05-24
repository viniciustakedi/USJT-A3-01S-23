import { RouterProvider } from 'react-router-dom'
import CustomThemeProvider from './components/CustomThemeProvider/CustomThemeProvider'
import { router } from './router'
import { CssBaseline } from '@mui/material'
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';

function App() {
  const cache = createCache({
    key: 'css',
    prepend: true,
  });

  return (
    <CacheProvider value={cache}>
      <CustomThemeProvider>
        <CssBaseline />
        <RouterProvider router={router} />
      </CustomThemeProvider>
    </CacheProvider>
  )
}

export default App
