import Head from 'next/head'
import { useState } from 'react'
import PhoneInput from 'react-phone-input-2'

const Form = () => {
  const [isStudent, setIsStudent] = useState(false)
  const [isItWorker, setIsItWorker] = useState(false)
  const [isNotItWorker, setIsNotItWorker] = useState(false)
  const [privacy, setPrivacy] = useState(true)

  return (
    <>
      <Head>
        <title>YAMAL.DEV CONF / Регистрация</title>
      </Head>
      <div
        className='hero min-h-screen'
        style={{ backgroundImage: `url("/photo.webp")` }}
      >
        <div className='hero-overlay bg-opacity-60' />
        <div className='my-10 flex w-[300px] flex-col gap-6 rounded-xl bg-base-300 p-6 shadow-md md:w-[600px] md:p-10'>
          <h1 className='text-3xl'>Регистрация</h1>
          <form className='flex flex-col gap-5'>
            <div className='flex flex-col gap-4 md:flex-row'>
              <input required className='input w-full' placeholder='Имя' />
              <input required className='input w-full' placeholder='Фамилия' />
            </div>
            <PhoneInput
              country={'ru'}
              inputClass='input w-full'
              specialLabel=''
              placeholder='7 (999) 999 99 99'
              inputProps={{
                required: true,
              }}
            />
            <input
              className='input w-full'
              placeholder='Email'
              type='email'
              required
            />
            <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
              <label className='flex cursor-pointer items-center gap-4'>
                <input
                  type='checkbox'
                  className='checkbox-secondary checkbox'
                  checked={isStudent}
                  onChange={() => setIsStudent(!isStudent)}
                />
                <span className='label-text'>Студент</span>
              </label>

              <label className='flex cursor-pointer items-center gap-4'>
                <input
                  type='checkbox'
                  className='checkbox-secondary checkbox'
                  checked={isItWorker}
                  onChange={() => setIsItWorker(!isItWorker)}
                />
                <span className='label-text'>Работаю в it</span>
              </label>

              <label className='flex cursor-pointer items-center gap-4'>
                <input
                  type='checkbox'
                  className='checkbox-secondary checkbox'
                  checked={isNotItWorker}
                  onChange={() => setIsNotItWorker(!isNotItWorker)}
                />
                <span className='label-text'>Работаю не в it</span>
              </label>
            </div>

            {isStudent && <></>}

            {isItWorker && (
              <>
                <textarea
                  className='textarea'
                  placeholder='Кем вы работаете?'
                  required
                />
                <textarea
                  className='textarea'
                  placeholder='В какой компании вы работаете?'
                />
                <textarea
                  className='textarea'
                  placeholder='Какой стек технологий вы используете?'
                />
              </>
            )}

            {isNotItWorker && (
              <>
                <textarea
                  className='textarea'
                  placeholder='В какой сфере вы работаете?'
                  required
                />
              </>
            )}

            <div className='divider' />

            <div className='flex gap-4'>
              <input
                type='checkbox'
                className='checkbox-secondary checkbox'
                checked={privacy}
                onChange={() => setPrivacy(!privacy)}
              />
              <p className='text-xs'>
                Я согласен на{' '}
                <label
                  htmlFor='privacy'
                  className='link-hover link-secondary link'
                >
                  обработку моих персональных данных
                </label>
                , а так же с{' '}
                <label
                  htmlFor='regulations'
                  className='link-hover link-secondary link'
                >
                  регламентом
                </label>{' '}
                конференции
              </p>
            </div>
            <button className='btn-secondary btn' disabled={!privacy}>
              Зарегистрироваться
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Form
