import type { AppProps } from 'next/app'
import Head from 'next/head'
import 'overlayscrollbars/css/OverlayScrollbars.min.css'

import '@/styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>YAMAL.DEV CONF</title>
      </Head>
      <main>
        <Component {...pageProps} />
      </main>
    </>
  )
}

export default MyApp
