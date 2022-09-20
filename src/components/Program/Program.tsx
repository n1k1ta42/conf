import { motion } from 'framer-motion'

import useMediaQuery from '@/utils/useMediaQuery'

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

export const Program = () => {
  const isDesktop = useMediaQuery('(min-width: 768px)')

  return (
    <div className='flex min-h-screen flex-col items-center justify-center gap-10 bg-gradient-to-t from-secondary to-base-200'>
      <h2 className='text-2xl text-white lg:text-5xl'>Программа конференции</h2>
      <div className='grid grid-cols-1 gap-4 lg:grid-cols-2'>
        {themes.map((theme, index) =>
          isDesktop ? (
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
          ) : (
            <div
              key={theme}
              className='flex w-[300px]  items-center justify-center rounded-xl p-5 shadow transition-all hover:shadow-none'
            >
              {theme}
            </div>
          ),
        )}
      </div>
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
                delay: themes.length / 10,
              },
            },
          }}
          className='text-center text-lg text-white lg:text-2xl'
        >
          Анонс программы 4 октября
        </motion.p>
      ) : (
        <p className='text-center text-lg text-white lg:text-2xl'>
          Анонс программы 4 октября
        </p>
      )}
    </div>
  )
}
