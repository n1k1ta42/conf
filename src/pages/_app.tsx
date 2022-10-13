import type { AppProps } from 'next/app'
import Head from 'next/head'
import Script from 'next/script'
import { Toaster } from 'react-hot-toast'

import { Header } from '@/components/Header'

import '@/styles/globals.css'

import { GTM_ID } from '@/utils/gtm'

import app from '../../package.json'

console.log('version', app.version)

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
      {/* Google Tag Manager - Global base code */}
      <Script
        id='gtag-base'
        strategy='afterInteractive'
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer', '${GTM_ID}');
          `,
        }}
      />
    </>
  )
}

export default App
