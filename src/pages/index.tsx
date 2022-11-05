import type { NextPage } from 'next'

import { Address } from '@/components/Address'
import { Footer } from '@/components/Footer'
import { Hero } from '@/components/Hero'
import { Program } from '@/components/Program'

const Home: NextPage = () => (
  <>
    <Hero />
    <Address />
    <Program />
    <Footer />
  </>
)

export default Home
