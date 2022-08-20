import { useContext, useEffect, useMemo, useState } from 'react';

import type { AppProps } from 'next/app'

import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'

import { lightDarkTheme } from '../themes';

import { UIContext, UIProvider } from '../context/ui'

import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  const [mode, setColorTheme] = useState<string>('light')

  const ColorTheme = () => {
    const { lightDarkMenu } = useContext(UIContext);

    useEffect(() => {
      setColorTheme(lightDarkMenu)
    }, [lightDarkMenu])

    return null
  }

  const theme = useMemo(() => createTheme(lightDarkTheme(mode)), [mode]);

  return (
    <>
      <CssBaseline />
      <UIProvider>
        <ColorTheme />
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </UIProvider>
    </>

  )
}

export default MyApp
