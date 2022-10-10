import clsx from 'clsx'
import Image from 'next/image'
import { useState } from 'react'
import { BiTimeFive } from 'react-icons/bi'
import { MdDateRange } from 'react-icons/md'

import { GithubIcon } from '@/components/Program/GithubIcon'
import { InstagramIcon } from '@/components/Program/InstagramIcon'
import { LinkedinIcon } from '@/components/Program/LinkedinIcon'
import { MailIcon } from '@/components/Program/MailIcon'
import { TelegramIcon } from '@/components/Program/TelegramIcon'
import { TwitterIcon } from '@/components/Program/TwitterIcon'
import { VkIcon } from '@/components/Program/VkIcon'

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
    position: 'SCRUM-мастер, СИБУР ДИДЖИТАЛ',
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
    id: 3,
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
    id: 4,
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
    id: 5,
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
    id: 6,
    name: 'Александра Прокшина',
    position: 'Руководитель разработки, ARTW',
    presentationType: 'доклад',
    presentationName:
      'Выход из замкнутого круга - как bitrix-разработчику перейти на программирование на фреймворках',
    photo: '/александра_прокшина.webp',
    day: 5,
    time: '17:40-18:40',
    links: [
      <TelegramIcon link='https://t.me/lineof' key='https://t.me/lineof' />,
      <InstagramIcon
        link='https://www.instagram.com/lineof/'
        key='https://www.instagram.com/lineof/'
      />,
    ],
  },
  {
    id: 7,
    name: 'Татьяна Еремина',
    position: 'Центр экспертизы развития IT специалиста, СИБУР ДИДЖИТАЛ',
    presentationType: 'воркшоп',
    presentationName: 'Создаём свой центр обучения ИТ специалистов',
    photo: '/татьяна_еремина.webp',
    day: 5,
    time: '13:00-15:00',
    links: [],
  },
  {
    id: 15,
    name: 'Антон Егорушков',
    position: 'Teamlead devops, Magnit tech',
    presentationType: 'воркшоп',
    presentationName: 'IaC pipeline: семь раз упади, восемь раз поднимись',
    photo: '/антон_егорушков.webp',
    day: 5,
    time: '16:00-18:00',
    links: [
      <TelegramIcon link='https://t.me/tozxspb' key='https://t.me/tozxspb' />,
    ],
  },
  {
    id: 8,
    name: 'Анна Ширяева',
    position: 'Фронтенд-разработчик, живущий жизнью человек, СИБУР ДИДЖИТАЛ',
    presentationType: 'доклад',
    presentationName:
      'Зачем мы опустились так низко? И нужен ли компаниям свой low-code?',
    photo: '/анна_ширяева.webp',
    day: 6,
    time: '11:00-12:00',
    links: [
      <TelegramIcon
        link='https://t.me/numbingmist'
        key='https://t.me/numbingmist'
      />,
      <MailIcon
        link='mailto:annaonduty@gmail.com'
        key='mailto:annaonduty@gmail.com'
      />,
    ],
  },

  {
    id: 9,
    name: 'Павел Соколов',
    position: 'Продуктовый дизайнер, СИБУР ДИДЖИТАЛ',
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
    id: 10,
    name: 'Андрей Шубин',
    position: 'Старший разработчик, Яндекс',
    presentationType: 'доклад',
    presentationName: 'ML в электронной коммерции. Оно вам надо?',
    photo: '/андрей_шубин.webp',
    day: 6,
    time: '13:40-14:40',
    links: [
      <VkIcon link='https://vk.com/ogursan' key='https://vk.com/ogursan' />,
    ],
  },
  {
    id: 11,
    name: 'Татьяна Еремина',
    position: 'Центр экспертизы развития IT специалиста, СИБУР ДИДЖИТАЛ',
    presentationType: 'доклад',
    presentationName: 'Как мы развиваем Айтишников',
    photo: '/татьяна_еремина.webp',
    day: 6,
    time: '15:20-16:20',
    links: [],
  },
  {
    id: 12,
    name: 'Антон Егорушков',
    position: 'Teamlead devops, Magnit tech',
    presentationType: 'доклад',
    presentationName: 'Инфраструктура как код',
    photo: '/антон_егорушков.webp',
    day: 6,
    time: '16:40-17:40',
    links: [
      <TelegramIcon link='https://t.me/tozxspb' key='https://t.me/tozxspb' />,
    ],
  },
  {
    id: 13,
    name: 'Александр Смирнов',
    position: 'SCRUM-мастер, СИБУР ДИДЖИТАЛ',
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
  {
    id: 14,
    name: 'Дмитрий Кирильчик',
    position: '',
    presentationType: 'воркшоп',
    presentationName: 'Програмируем устройство для умного дома',
    photo: '/дмитрий_кирильчик.webp',
    day: 6,
    time: '16:00-18:00',
    links: [
      <TelegramIcon link='https://t.me/triengl' key='https://t.me/triengl' />,
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
            <TwitterIcon link='https://twitter.com/dark_mefody' />
          </div>

          <div className='flex flex-1 items-center gap-4'>
            <h3 className='text-xl font-bold'>Саша Шинкевич</h3>
            <TwitterIcon link='https://twitter.com/neesoglasnaja' />
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
