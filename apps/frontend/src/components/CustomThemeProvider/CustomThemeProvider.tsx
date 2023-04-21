import { ReactNode } from 'react'

import { ThemeProvider, createTheme } from '@mui/material/styles'
import { ptBR } from '@mui/material/locale'

import themeOptions from './theme-options'

export type CustomThemeProviderProps = {
  children: ReactNode
}

export default function CustomThemeProvider (props: CustomThemeProviderProps) {
  const theme = createTheme(themeOptions, ptBR)

  return (
    <ThemeProvider theme={theme}>
      {props.children}
    </ThemeProvider>
  )
}
