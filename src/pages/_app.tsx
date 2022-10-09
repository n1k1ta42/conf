import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Toaster } from 'react-hot-toast'

import { Header } from '@/components/Header'

import '@/styles/globals.css'

import { version } from '../../package.json'

console.log('version', version)

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <title>YAMAL.DEV CONF</title>
      </Head>
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
      <Toaster />
    </>
  )
}

export default App
