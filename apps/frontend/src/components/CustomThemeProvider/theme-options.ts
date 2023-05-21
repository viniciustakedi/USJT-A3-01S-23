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
    },
    background: {
      default: '#191414'
    }
  },
  typography: {
    fontFamily: 'Inter, Open Sans, Roboto, sans-serif',
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
    MuiAvatar: {
      styleOverrides: {
        root: {
          width: '80px',
          height: '80px'
        }
      }
    },
    MuiButton: {
      variants: [
        {
          props: { variant: 'contained'},
          style: {
            color: '#FFFFFF'
          }
        }
      ],
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
