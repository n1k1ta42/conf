import type { NextPage } from 'next'

import { Address } from '@/components/Address'
import { Footer } from '@/components/Footer'
import { Hero } from '@/components/Hero'
import { Program } from '@/components/Program'

const Home: NextPage = () => (
  <>
    <Hero />
    <div className='hero min-h-screen'>
      <iframe
        width='860'
        height='515'
        src='https://www.youtube.com/embed/-2pBeMzh7H0'
        title='YouTube video player'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
      ></iframe>
    </div>
    <Address />
    <Program />
    <Footer />
  </>
)

export default Home
