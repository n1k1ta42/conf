import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'

import useMediaQuery from '@/utils/useMediaQuery'

const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`
const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`

export const Address = () => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isInView, setIsInView] = useState(false)
  const isDesktop = useMediaQuery('(min-width: 768px)')

  return (
    <div className='hero min-h-screen bg-base-300'>
      <div className='hero-content flex-col gap-20 lg:flex-row'>
        {isDesktop ? (
          <motion.a
            href='https://vk.com/polaris_artresidence'
            target='_blank'
            rel='noreferrer'
            className='order-2 lg:order-1'
            initial={false}
            animate={
              isLoaded && isInView
                ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
                : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
            }
            transition={{ duration: 1 }}
            viewport={{ once: true, amount: 0.8 }}
            onViewportEnter={() => setIsInView(true)}
          >
            <Image
              src='/polaris.webp'
              alt='polaris'
              width={280}
              height={351}
              className='max-w-sm rounded-lg shadow-2xl'
              onLoad={() => setIsLoaded(true)}
            />
          </motion.a>
        ) : (
          <a
            href='https://vk.com/polaris_artresidence'
            target='_blank'
            rel='noreferrer'
            className='order-2 lg:order-1'
          >
            <Image
              src='/polaris.webp'
              alt='polaris'
              width={280}
              height={351}
              className='max-w-sm rounded-lg shadow-2xl'
            />
          </a>
        )}
        {isDesktop ? (
          <motion.div
            initial='offscreen'
            whileInView='onscreen'
            viewport={{ once: true, amount: 0.8 }}
            variants={{
              offscreen: {
                x: 300,
                opacity: 0,
              },
              onscreen: {
                x: 0,
                opacity: 1,
                transition: {
                  type: 'spring',
                  bounce: 0.4,
                  duration: 0.8,
                  delay: 0.3,
                },
              },
            }}
            className='order-1 lg:order-2'
          >
            <h1 className='text-xl font-bold lg:text-5xl'>
              Арт-резеденция &quot;Полярис&quot;
            </h1>
            <p className='flex gap-1 py-6'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='h-6 w-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M15 10.5a3 3 0 11-6 0 3 3 0 016 0z'
                />
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z'
                />
              </svg>
              Адрес: г. Салехард, ул. Чубынина 17
            </p>
            <a
              className='link-hover link'
              href='https://yandex.ru/maps/-/CCUVVIx~0D'
              target='_blank'
              rel='noreferrer'
            >
              66.529707, 66.613675
            </a>
          </motion.div>
        ) : (
          <div className='order-1 lg:order-2'>
            <h1 className='text-xl font-bold lg:text-5xl'>
              Арт-резеденция &quot;Полярис&quot;
            </h1>
            <p className='flex gap-1 py-6'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='h-6 w-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M15 10.5a3 3 0 11-6 0 3 3 0 016 0z'
                />
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z'
                />
              </svg>
              Адрес: г. Салехард, ул. Чубынина 17
            </p>
            <a
              className='link-hover link'
              href='https://yandex.ru/maps/-/CCUVVIx~0D'
              target='_blank'
              rel='noreferrer'
            >
              66.529707, 66.613675
            </a>
          </div>
        )}
      </div>
    </div>
  )
}
