import Document, {
  DocumentContext,
  DocumentInitialProps,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document'

import { PrivacyModal } from '@/components/PrivacyModal/PrivacyModal'
import { RegulationsModal } from '@/components/RegulationsModal/RegulationsModal'

import { GTM_ID } from '@/utils/gtm'

class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext,
  ): Promise<DocumentInitialProps> {
    return await Document.getInitialProps(ctx)
  }

  render() {
    return (
      <Html lang='ru'>
        <Head>
          <meta name='description' content='IT-конференция на Ямале' />
          <meta property='og:url' content='https://conf.yamal.dev' />
          <meta property='og:title' content='YAMAL.DEV CONF' />
          <meta property='og:description' content='IT-конференция на Ямале' />
          <meta property='og:type' content='website' />
          <meta
            property='og:image'
            content='https://conf.yamal.dev/og-image.svg'
          />
          <meta name='robots' content='all' />
          <link rel='canonical' href='https://conf.yamal.dev' />
          <link rel='icon' href='/favicon/favicon.ico' sizes='any' />
          <link rel='icon' href='/favicon/favicon-32x32.png' />
          <link rel='icon' href='/favicon/favicon-16x16.png' />
          <link rel='apple-touch-icon' href='/favicon/apple-touch-icon.png' />
          <link rel='manifest' href='/favicon/site.webmanifest' />
        </Head>
        <body className='relative'>
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height='0'
              width='0'
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>
          <Main />
          <NextScript />
          <PrivacyModal />
          <RegulationsModal />
        </body>
      </Html>
    )
  }
}

export default MyDocument
