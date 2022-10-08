import axios from 'axios'
import clsx from 'clsx'
import Head from 'next/head'
import { useState } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import PhoneInput from 'react-phone-input-2'

import { User } from '@/domain/User'

const Form = () => {
  const [isLoading, setIsLoading] = useState(false)
  const {
    register,
    handleSubmit,
    control,
    watch,
    reset,
    formState: { errors },
  } = useForm<User>({
    defaultValues: {
      isFamiliar: true,
    },
  })

  const onSubmit: SubmitHandler<User> = async data => {
    setIsLoading(true)
    try {
      const res = await axios.post('/api/register', data)
      toast.success(res.data.message, {
        duration: 10000,
      })
      reset()
    } catch (e: any) {
      toast.error(e.response.data.message)
    }

    setIsLoading(false)
  }

  return (
    <>
      <Head>
        <title>YAMAL.DEV CONF / Регистрация</title>
      </Head>
      <div
        className='hero min-h-screen pt-[75px]'
        style={{ backgroundImage: `url("/photo.webp")` }}
      >
        <div className='hero-overlay bg-base-300/60' />
        <div className='my-10 flex w-11/12 flex-col gap-6 rounded-xl bg-base-300 p-6 shadow-md md:w-[700px] md:p-10'>
          <h1 className='text-3xl'>Регистрация</h1>
          <form
            noValidate={true}
            className='flex flex-col gap-5'
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className='flex flex-col gap-4 md:flex-row'>
              <div className='flex w-full flex-col gap-2'>
                <input
                  disabled={isLoading}
                  className={clsx('input w-full', errors.name && 'input-error')}
                  placeholder='Имя'
                  {...register('name', {
                    required: 'Обязательное поле',
                    minLength: {
                      value: 2,
                      message: 'Поле должно содержать не менее 2 символов',
                    },
                    maxLength: {
                      value: 30,
                      message: 'Поле не может содержать более 30 символов',
                    },
                  })}
                />
                {errors.name && (
                  <p className='flex items-center gap-2 text-xs text-red-500'>
                    {errors.name?.message}
                  </p>
                )}
              </div>
              <div className='flex w-full flex-col gap-2'>
                <input
                  disabled={isLoading}
                  className={clsx(
                    'input w-full',
                    errors.surname && 'input-error',
                  )}
                  placeholder='Фамилия'
                  {...register('surname', {
                    required: 'Обязательное поле',
                    minLength: {
                      value: 2,
                      message: 'Поле должно содержать не менее 2 символов',
                    },
                    maxLength: {
                      value: 30,
                      message: 'Поле не может содержать более 30 символов',
                    },
                  })}
                />
                {errors.surname && (
                  <p className='flex items-center gap-2 text-xs text-red-500'>
                    {errors.surname?.message}
                  </p>
                )}
              </div>
            </div>
            <div className='flex w-full flex-col gap-2'>
              <Controller
                name='phone'
                control={control}
                rules={{ required: 'Обязательное поле' }}
                // @ts-ignore
                render={({ field }) => (
                  <PhoneInput
                    disabled={isLoading}
                    country='ru'
                    inputClass={clsx(
                      'input w-full',
                      errors.phone && 'input-error',
                    )}
                    specialLabel=''
                    placeholder='7 (999) 999 99 99'
                    {...field}
                  />
                )}
              />
              {errors.phone && (
                <p className='flex items-center gap-2 text-xs text-red-500'>
                  {errors.phone?.message}
                </p>
              )}
            </div>
            <div className='flex w-full flex-col gap-2'>
              <input
                disabled={isLoading}
                className={clsx('input w-full', errors.email && 'input-error')}
                placeholder='Email'
                type='email'
                {...register('email', {
                  required: 'Обязательное поле',
                  pattern: {
                    value:
                      /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/,
                    message: 'Некорректный email',
                  },
                })}
              />
              {errors.email && (
                <p className='flex items-center gap-2 text-xs text-red-500'>
                  {errors.email?.message}
                </p>
              )}
            </div>
            <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
              <label className='flex cursor-pointer items-center gap-4'>
                <input
                  disabled={isLoading}
                  type='radio'
                  value='student'
                  className='radio-secondary radio'
                  {...register('role')}
                />
                <span className='label-text'>Студент</span>
              </label>

              <label className='flex cursor-pointer items-center gap-4'>
                <input
                  disabled={isLoading}
                  type='radio'
                  value='worker'
                  className='radio-secondary radio'
                  {...register('role')}
                />
                <span className='label-text'>Работаю в it</span>
              </label>

              <label className='flex cursor-pointer items-center gap-4'>
                <input
                  disabled={isLoading}
                  type='radio'
                  value='other'
                  className='radio-secondary radio'
                  {...register('role')}
                />
                <span className='label-text'>Работаю не в it</span>
              </label>
            </div>

            {watch('role') === 'student' && (
              <>
                <>
                  <textarea
                    disabled={isLoading}
                    className='textarea'
                    placeholder='Где вы учитесь?'
                    {...register('university')}
                  />
                  <textarea
                    disabled={isLoading}
                    className='textarea'
                    placeholder='Какая у вас специальность?'
                    {...register('specialization')}
                  />
                </>
              </>
            )}

            {watch('role') === 'worker' && (
              <>
                <textarea
                  disabled={isLoading}
                  className='textarea'
                  placeholder='Кем вы работаете?'
                  {...register('position')}
                />
                <textarea
                  disabled={isLoading}
                  className='textarea'
                  placeholder='В какой компании вы работаете?'
                  {...register('company')}
                />
                <textarea
                  disabled={isLoading}
                  className='textarea'
                  placeholder='Какой стек технологий вы используете?'
                  {...register('stack')}
                />
              </>
            )}

            {watch('role') === 'other' && (
              <>
                <textarea
                  disabled={isLoading}
                  className='textarea'
                  placeholder='В какой сфере вы работаете?'
                  {...register('sphere')}
                />
              </>
            )}

            <div className='divider' />

            <div className='flex gap-4'>
              <input
                disabled={isLoading}
                type='checkbox'
                className='checkbox-secondary checkbox'
                {...register('isFamiliar')}
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
            <button
              className={clsx('btn-secondary btn', isLoading && 'loading')}
              disabled={!watch('isFamiliar') || isLoading}
            >
              Зарегистрироваться
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Form
