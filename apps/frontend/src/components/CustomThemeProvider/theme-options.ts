import { ThemeOptions } from '@mui/material'

const themeOptions: ThemeOptions = {
  palette: {
    primary: {
      main: '#1DB954'
    },
    secondary: {
      main: '#D3D3D9'
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
  typography: {
    fontFamily: 'Open Sans, Roboto, sans-serif',
    h1: {
      fontSize: '38px',
      fontWeight: 600
    },
    h2: {
      fontSize: '30px',
      fontWeight: 500
    },
    h3: {
      fontSize: '22px',
      fontWeight: 500
    }
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true
      },
      styleOverrides: {
        root: {
          borderRadius: '8px',
          textTransform: 'none',
          fontSize: '16px',
          fontWeight: 500
        }
      }
    }
  }
}

export default themeOptions
