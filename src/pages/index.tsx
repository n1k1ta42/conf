import { motion } from 'framer-motion'
import type { NextPage } from 'next'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useState } from 'react'

const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`
const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`

const themes = [
  'Frontend',
  'Backend',
  'data science',
  'Product design',
  'Менеджмент',
  'Agile',
  'Образование',
  'HR',
  'Game dev',
  'Devops',
  'Machine learning',
  'Воркшопы',
]

const Home: NextPage = () => {
  const router = useRouter()
  const [isLoaded, setIsLoaded] = useState(false)
  const [isInView, setIsInView] = useState(false)

  return (
    <>
      <div
        className='hero min-h-screen'
        style={{ backgroundImage: `url("/hero-bg.webp")` }}
      >
        <div className='hero-overlay bg-base-300/60'></div>
        <div className='hero-content text-center text-neutral-content'>
          <div className='max-w-full'>
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
          </div>
        </div>
      </div>
      <div className='hero min-h-screen bg-base-300'>
        <div className='hero-content flex-col gap-20 lg:flex-row'>
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
        </div>
      </div>

      <div className='flex min-h-screen flex-col items-center justify-center gap-10 bg-gradient-to-t from-secondary to-base-200'>
        <h2 className='text-2xl text-white lg:text-5xl'>
          Программа конференции
        </h2>
        <div className='grid grid-cols-1 gap-4 lg:grid-cols-2'>
          {themes.map((theme, index) => (
            <motion.div
              key={theme}
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
                    delay: index / 10,
                  },
                },
              }}
              className='flex w-[300px]  items-center justify-center rounded-xl p-5 shadow transition-all hover:shadow-none'
            >
              {theme}
            </motion.div>
          ))}
        </div>
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
                delay: themes.length / 7.5,
              },
            },
          }}
          className='text-center text-lg text-white lg:text-2xl'
        >
          Анонс программы 4 октября
        </motion.p>
      </div>

      <footer className='footer footer-center bg-base-300 p-10'>
        <div>
          <p className='font-bold'>YAMAL.DEV</p>
          <p>Copyright © 2022 - All right reserved</p>
        </div>
        <div>
          <div className='grid grid-flow-col gap-4'>
            <a
              href='https://www.youtube.com/channel/UCIZCgmAI_tb1X9l17nAU6Rg?app=desktop'
              target='_blank'
              rel='noreferrer'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                className='fill-current'
              >
                <path d='M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z'></path>
              </svg>
            </a>
            <a href='https://t.me/yamaldev' target='_blank' rel='noreferrer'>
              <svg
                fill='#ffffff'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 50 50'
                width='24px'
                height='24px'
              >
                <path d='M46.137,6.552c-0.75-0.636-1.928-0.727-3.146-0.238l-0.002,0C41.708,6.828,6.728,21.832,5.304,22.445	c-0.259,0.09-2.521,0.934-2.288,2.814c0.208,1.695,2.026,2.397,2.248,2.478l8.893,3.045c0.59,1.964,2.765,9.21,3.246,10.758	c0.3,0.965,0.789,2.233,1.646,2.494c0.752,0.29,1.5,0.025,1.984-0.355l5.437-5.043l8.777,6.845l0.209,0.125	c0.596,0.264,1.167,0.396,1.712,0.396c0.421,0,0.825-0.079,1.211-0.237c1.315-0.54,1.841-1.793,1.896-1.935l6.556-34.077	C47.231,7.933,46.675,7.007,46.137,6.552z M22,32l-3,8l-3-10l23-17L22,32z' />
              </svg>
            </a>
            <a
              href='https://vk.com/yamal.dev.conf'
              target='_blank'
              rel='noreferrer'
            >
              <svg
                fill='#ffffff'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 48 48'
                width='24px'
                height='24px'
              >
                <path d='M45.763,35.202c-1.797-3.234-6.426-7.12-8.337-8.811c-0.523-0.463-0.579-1.264-0.103-1.776 c3.647-3.919,6.564-8.422,7.568-11.143C45.334,12.27,44.417,11,43.125,11l-3.753,0c-1.237,0-1.961,0.444-2.306,1.151 c-3.031,6.211-5.631,8.899-7.451,10.47c-1.019,0.88-2.608,0.151-2.608-1.188c0-2.58,0-5.915,0-8.28 c0-1.147-0.938-2.075-2.095-2.075L18.056,11c-0.863,0-1.356,0.977-0.838,1.662l1.132,1.625c0.426,0.563,0.656,1.248,0.656,1.951 L19,23.556c0,1.273-1.543,1.895-2.459,1.003c-3.099-3.018-5.788-9.181-6.756-12.128C9.505,11.578,8.706,11.002,7.8,11l-3.697-0.009 c-1.387,0-2.401,1.315-2.024,2.639c3.378,11.857,10.309,23.137,22.661,24.36c1.217,0.12,2.267-0.86,2.267-2.073l0-3.846 c0-1.103,0.865-2.051,1.977-2.079c0.039-0.001,0.078-0.001,0.117-0.001c3.267,0,6.926,4.755,8.206,6.979 c0.368,0.64,1.056,1.03,1.8,1.03l4.973,0C45.531,38,46.462,36.461,45.763,35.202z' />
              </svg>
            </a>
            <a
              href='https://t.me/+eCn-3huVI2Y2ZmIy'
              target='_blank'
              rel='noreferrer'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='currentColor'
                className='h-6 w-6'
              >
                <path
                  fillRule='evenodd'
                  d='M12 2.25c-2.429 0-4.817.178-7.152.521C2.87 3.061 1.5 4.795 1.5 6.741v6.018c0 1.946 1.37 3.68 3.348 3.97.877.129 1.761.234 2.652.316V21a.75.75 0 001.28.53l4.184-4.183a.39.39 0 01.266-.112c2.006-.05 3.982-.22 5.922-.506 1.978-.29 3.348-2.023 3.348-3.97V6.741c0-1.947-1.37-3.68-3.348-3.97A49.145 49.145 0 0012 2.25zM8.25 8.625a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25zm2.625 1.125a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875-1.125a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25z'
                  clipRule='evenodd'
                />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Home
