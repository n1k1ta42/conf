import clsx from 'clsx'
import Image from 'next/image'
import { useState } from 'react'
import { BiTimeFive } from 'react-icons/bi'
import { MdDateRange } from 'react-icons/md'

import { GithubIcon } from '@/components/Program/GithubIcon'
import { InstagramIcon } from '@/components/Program/InstagramIcon'
import { LinkedinIcon } from '@/components/Program/LinkedinIcon'
import { TelegramIcon } from '@/components/Program/TelegramIcon'
import { TwitterIcon } from '@/components/Program/TwitterIcon'

const program = [
  {
    id: 1,
    name: 'Саша Шинкевич',
    position: 'Engineering Manager, Bravado',
    presentationType: 'доклад',
    presentationName: 'Необычные браузерные API',
    photo: '/саша_шинкевич.webp',
    day: 5,
    time: '11:00-11:50',
    links: [
      <TwitterIcon
        link='https://twitter.com/neesoglasnaja'
        key='https://twitter.com/neesoglasnaja'
      />,
    ],
  },
  {
    id: 2,
    name: 'Александр Смирнов',
    position: 'SCRUM-мастер, СИБУР Digital',
    presentationType: 'доклад',
    presentationName:
      'Что такое продуктовый подход на практике и  как он помогает в командной разработке',
    photo: '/александр_смирнов.webp',
    day: 5,
    time: '12:20-13:20',
    links: [
      <TelegramIcon
        link='https://t.me/AlexSibur'
        key='https://t.me/AlexSibur'
      />,
      <InstagramIcon
        link='https://www.instagram.com/Greatload/'
        key='https://www.instagram.com/Greatload/'
      />,
    ],
  },
  {
    id: 4,
    name: 'Андрей Смирнов',
    position: 'Руководитель управления клиентской разработки, X5 Group',
    presentationType: 'доклад',
    presentationName: 'Как вырасти в IT и остаться человеком',
    photo: '/андрей_смирнов.webp',
    day: 5,
    time: '13:40-14:40',
    links: [
      <TwitterIcon
        link='https://twitter.com/sandark7'
        key='https://twitter.com/sandark7'
      />,
      <TelegramIcon link='https://t.me/sandark' key='https://t.me/sandark' />,
    ],
  },
  {
    id: 5,
    name: 'Надя Крутикова',
    position: 'Карьерный коуч, Elbrus bootcamp',
    presentationType: 'доклад',
    presentationName: 'Как войти в IT',
    photo: '/надя_крутикова.webp',
    day: 5,
    time: '15:20-16:20',
    links: [
      <TelegramIcon
        link='https://t.me/krutikovanad'
        key='https://t.me/krutikovanad'
      />,
      <LinkedinIcon
        link='https://www.linkedin.com/in/krutikovanad/'
        key='https://www.linkedin.com/in/krutikovanad/'
      />,
    ],
  },
  {
    id: 6,
    name: 'Семён Левенсон',
    position: 'Руководитель группы, Дзен',
    presentationType: 'доклад',
    presentationName: 'Про коммуникацию разработчиков и дизайнеров',
    photo: '/семен_левенсон.webp',
    day: 5,
    time: '16:40-17:40',
    links: [
      <TwitterIcon
        link='https://twitter.com/sem_eleven'
        key='https://twitter.com/sem_eleven'
      />,
      <GithubIcon
        link='http://github.com/semeleven'
        key='http://github.com/semeleven'
      />,
    ],
  },
  {
    id: 7,
    name: 'Павел Соколов',
    position: 'Продуктовый дизайнер, Сибур диджитал',
    presentationType: 'доклад',
    presentationName: 'Рабочие процессы продуктового дизайнера',
    photo: '/павел_соколов.webp',
    day: 6,
    time: '12:20-13:20',
    links: [
      <TelegramIcon
        link='https://t.me/sokolovpss'
        key='https://t.me/sokolovpss'
      />,
    ],
  },
  {
    id: 3,
    name: 'Александр Смирнов',
    position: 'SCRUM-мастер, СИБУР Digital',
    presentationType: 'воркшоп',
    presentationName: 'Оценка задач в Story Points',
    photo: '/александр_смирнов.webp',
    day: 6,
    time: '13:30-15:30',
    links: [
      <TelegramIcon
        link='https://t.me/AlexSibur'
        key='https://t.me/AlexSibur'
      />,
      <InstagramIcon
        link='https://www.instagram.com/Greatload/'
        key='https://www.instagram.com/Greatload/'
      />,
    ],
  },
]

export const Program = () => {
  const [date, setDate] = useState<number>(5)

  return (
    <div className='flex min-h-screen flex-col items-center justify-center gap-10 bg-gradient-to-t from-secondary to-base-200 p-10'>
      <h2 className='text-2xl text-white lg:text-3xl'>Ведущие</h2>
      <div className='flex w-[300px] flex-col gap-2 rounded-3xl bg-neutral p-4 shadow md:w-[500px]'>
        <Image
          src='/ведущие.webp'
          alt='Фото ведущих'
          width={568}
          height={450}
          className='rounded-3xl'
          objectFit='cover'
        />
        <div className='flex flex-col items-center gap-5 md:flex-row md:items-start'>
          <div className='flex flex-1 items-center gap-4'>
            <h3 className='text-xl font-bold'>Никита Дубко</h3>
            <a
              href='https://twitter.com/dark_mefody'
              target='_blank'
              rel='noreferrer'
            >
              <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12ZM11.6406 9.75375L11.6658 10.169L11.2461 10.1181C9.71843 9.92323 8.38383 9.26226 7.25067 8.15216L6.69668 7.60135L6.55399 8.0081C6.25181 8.91482 6.44487 9.87239 7.0744 10.5164C7.41015 10.8723 7.33461 10.9232 6.75544 10.7113C6.55399 10.6435 6.37772 10.5927 6.36093 10.6181C6.30218 10.6774 6.50363 11.4486 6.66311 11.7536C6.88134 12.1773 7.32621 12.5925 7.81305 12.8383L8.22434 13.0332L7.73751 13.0417C7.26746 13.0417 7.25067 13.0501 7.30103 13.2281C7.46891 13.7789 8.13201 14.3636 8.87066 14.6178L9.39108 14.7958L8.93781 15.067C8.26631 15.4568 7.4773 15.6771 6.68829 15.694C6.31057 15.7025 6 15.7364 6 15.7618C6 15.8466 7.02404 16.3211 7.61999 16.5075C9.40786 17.0584 11.5315 16.8211 13.1263 15.8805C14.2595 15.211 15.3926 13.8806 15.9214 12.5925C16.2068 11.9062 16.4922 10.652 16.4922 10.0503C16.4922 9.66054 16.5174 9.60969 16.9874 9.14362C17.2644 8.87245 17.5246 8.57586 17.575 8.49112C17.6589 8.33011 17.6505 8.33011 17.2224 8.47417C16.509 8.72839 16.4083 8.6945 16.7608 8.31317C17.021 8.042 17.3316 7.5505 17.3316 7.40645C17.3316 7.38102 17.2057 7.42339 17.063 7.49966C16.9119 7.5844 16.5761 7.71151 16.3243 7.78778L15.8711 7.93184L15.4598 7.65219C15.2331 7.49966 14.9142 7.33018 14.7463 7.27934C14.3182 7.1607 13.6635 7.17765 13.2774 7.31323C12.2282 7.69456 11.5651 8.67755 11.6406 9.75375Z'
                  fill='white'
                />
              </svg>
            </a>
          </div>

          <div className='flex flex-1 items-center gap-4'>
            <h3 className='text-xl font-bold'>Саша Шинкевич</h3>
            <a
              key='https://twitter.com/neesoglasnaja'
              href='https://twitter.com/neesoglasnaja'
              target='_blank'
              rel='noreferrer'
            >
              <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12ZM11.6406 9.75375L11.6658 10.169L11.2461 10.1181C9.71843 9.92323 8.38383 9.26226 7.25067 8.15216L6.69668 7.60135L6.55399 8.0081C6.25181 8.91482 6.44487 9.87239 7.0744 10.5164C7.41015 10.8723 7.33461 10.9232 6.75544 10.7113C6.55399 10.6435 6.37772 10.5927 6.36093 10.6181C6.30218 10.6774 6.50363 11.4486 6.66311 11.7536C6.88134 12.1773 7.32621 12.5925 7.81305 12.8383L8.22434 13.0332L7.73751 13.0417C7.26746 13.0417 7.25067 13.0501 7.30103 13.2281C7.46891 13.7789 8.13201 14.3636 8.87066 14.6178L9.39108 14.7958L8.93781 15.067C8.26631 15.4568 7.4773 15.6771 6.68829 15.694C6.31057 15.7025 6 15.7364 6 15.7618C6 15.8466 7.02404 16.3211 7.61999 16.5075C9.40786 17.0584 11.5315 16.8211 13.1263 15.8805C14.2595 15.211 15.3926 13.8806 15.9214 12.5925C16.2068 11.9062 16.4922 10.652 16.4922 10.0503C16.4922 9.66054 16.5174 9.60969 16.9874 9.14362C17.2644 8.87245 17.5246 8.57586 17.575 8.49112C17.6589 8.33011 17.6505 8.33011 17.2224 8.47417C16.509 8.72839 16.4083 8.6945 16.7608 8.31317C17.021 8.042 17.3316 7.5505 17.3316 7.40645C17.3316 7.38102 17.2057 7.42339 17.063 7.49966C16.9119 7.5844 16.5761 7.71151 16.3243 7.78778L15.8711 7.93184L15.4598 7.65219C15.2331 7.49966 14.9142 7.33018 14.7463 7.27934C14.3182 7.1607 13.6635 7.17765 13.2774 7.31323C12.2282 7.69456 11.5651 8.67755 11.6406 9.75375Z'
                  fill='white'
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <h2 className='text-2xl text-white lg:text-3xl'>Расписание</h2>
      <div className='tabs tabs-boxed'>
        <a
          className={clsx('tab', {
            ['tab-active']: date === 5,
          })}
          onClick={() => setDate(5)}
        >
          5 ноября
        </a>
        <a
          className={clsx('tab', {
            ['tab-active']: date === 6,
          })}
          onClick={() => setDate(6)}
        >
          6 ноября
        </a>
      </div>
      <div className='flex flex-wrap justify-center  gap-5'>
        {program
          .filter(({ day }) => day === date)
          .map(
            ({
              id,
              name,
              position,
              presentationType,
              presentationName,
              photo,
              day,
              time,
              links,
            }) => (
              <div
                key={id}
                className='flex h-[710px] w-[300px] flex-col gap-5 rounded-3xl bg-neutral shadow'
              >
                <Image
                  src={photo}
                  alt={`Фото спикера - ${name}`}
                  width={268}
                  height={450}
                  className='rounded-3xl'
                  objectFit='cover'
                />
                <div className='px-4'>
                  <h3 className='text-xl font-bold'>{name}</h3>
                  <p className='text-xs'>{position}</p>
                </div>
                <div className='px-4'>
                  <p className='text-sm'>{presentationName}</p>
                  {presentationType === 'доклад' ? (
                    <div className='badge-accent badge badge-sm'>
                      {presentationType}
                    </div>
                  ) : (
                    <div className='badge-secondary badge badge-sm'>
                      {presentationType}
                    </div>
                  )}
                </div>

                <div className='flex flex-1 items-end justify-between px-4 pb-4'>
                  <div className='flex flex-col gap-2'>
                    <div className='badge-outline badge badge-sm gap-1'>
                      <MdDateRange />
                      {day} ноября
                    </div>
                    <div className='badge-outline badge badge-sm gap-1'>
                      <BiTimeFive />
                      {time}
                    </div>
                  </div>

                  <div className='flex gap-2'>{links.map(link => link)}</div>
                </div>
              </div>
            ),
          )}
      </div>
    </div>
  )
}
