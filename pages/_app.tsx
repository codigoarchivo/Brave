import type { AppProps } from 'next/app'

import { CssBaseline } from '@mui/material'

import { UIProvider } from '../context/ui'

import { ColorsProvider } from '../context/colors';

import '../sass/styles.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ColorsProvider>
        <UIProvider>
          <CssBaseline />
          <Component {...pageProps} />
        </UIProvider>
      </ColorsProvider>
    </>
  )
}

export default MyApp
