import { ThemeOptions } from '@mui/material'

const themeOptions: ThemeOptions = {
  palette: {
    primary: {
      main: '#1DB954'
    },
    secondary: {
      main: '#191414'
    },
    success: {
      main: '#0A7E22'
    },
    warning: {
      main: '#F0B732'
    },
    error: {
      main: '#FD314D'
    }
  },
  components: {
    MuiChip: {
      styleOverrides: {
        root: {
          fontSize: '16px'
        }
      }
    }
  }
}

export default themeOptions
