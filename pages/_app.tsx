import type { AppProps } from 'next/app'

import { CssBaseline } from '@mui/material'

import { UIProvider } from '../context/ui'

import { ColorsProvider } from '../context/colors';

import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ColorsProvider>
        <CssBaseline />
        <UIProvider>
          <Component {...pageProps} />
        </UIProvider>
      </ColorsProvider>

    </>

  )
}

export default MyApp
