import { motion } from 'framer-motion'
import { useRouter } from 'next/router'

import useMediaQuery from '@/utils/useMediaQuery'

export const Hero = () => {
  const router = useRouter()
  const isDesktop = useMediaQuery('(min-width: 768px)')

  return (
    <div
      className='hero min-h-screen'
      style={{ backgroundImage: `url("/hero-bg.webp")` }}
    >
      <div className='hero-overlay bg-base-300/60'></div>
      <div className='hero-content text-center text-neutral-content'>
        <div className='max-w-full'>
          {isDesktop ? (
            <motion.h1
              initial='offscreen'
              whileInView='onscreen'
              viewport={{ once: true }}
              variants={{
                offscreen: {
                  y: 300,
                  opacity: 0,
                },
                onscreen: {
                  y: 0,
                  opacity: 1,
                  transition: {
                    type: 'spring',
                    bounce: 0.4,
                    duration: 0.8,
                    delay: 0,
                  },
                },
              }}
              className='mb-5 text-[48px] font-bold text-white md:text-[84px]'
            >
              YAMAl.DEV CONF
            </motion.h1>
          ) : (
            <h1 className='mb-5 text-[48px] font-bold text-white md:text-[84px]'>
              YAMAl.DEV CONF
            </h1>
          )}
          {isDesktop ? (
            <motion.p
              initial='offscreen'
              whileInView='onscreen'
              viewport={{ once: true }}
              variants={{
                offscreen: {
                  y: 300,
                  opacity: 0,
                },
                onscreen: {
                  y: 0,
                  opacity: 1,
                  transition: {
                    type: 'spring',
                    bounce: 0.4,
                    duration: 0.8,
                    delay: 0.1,
                  },
                },
              }}
              className='mb-5 text-[24px] font-bold md:text-[42px]'
            >
              IT конференция на Ямале
            </motion.p>
          ) : (
            <p className='mb-5 text-[24px] font-bold md:text-[42px]'>
              IT конференция на Ямале
            </p>
          )}
          {isDesktop ? (
            <motion.p
              initial='offscreen'
              whileInView='onscreen'
              viewport={{ once: true }}
              variants={{
                offscreen: {
                  y: 300,
                  opacity: 0,
                },
                onscreen: {
                  y: 0,
                  opacity: 1,
                  transition: {
                    type: 'spring',
                    bounce: 0.4,
                    duration: 0.8,
                    delay: 0.2,
                  },
                },
              }}
              className='mb-5 text-[14px] md:text-[21px]'
            >
              online-offline 5-6 ноября
            </motion.p>
          ) : (
            <p className='mb-5 text-[14px] md:text-[21px]'>
              online-offline 5-6 ноября
            </p>
          )}
          {isDesktop ? (
            <motion.button
              initial='offscreen'
              whileInView='onscreen'
              viewport={{ once: true }}
              variants={{
                offscreen: {
                  opacity: 0,
                },
                onscreen: {
                  opacity: 1,
                  transition: {
                    delay: 0.3,
                  },
                },
              }}
              className='btn-secondary btn'
              onClick={() => router.push('/form')}
            >
              Регистрация
            </motion.button>
          ) : (
            <button
              className='btn-secondary btn'
              onClick={() => router.push('/form')}
            >
              Регистрация
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
