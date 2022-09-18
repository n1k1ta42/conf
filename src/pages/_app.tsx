import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Toaster } from 'react-hot-toast'

import '@/styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <title>YAMAL.DEV CONF</title>
      </Head>
      <main>
        <Component {...pageProps} />
      </main>
      <Toaster />
    </>
  )
}

export default MyApp
