import axios from 'axios'
import clsx from 'clsx'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

interface FormState {
  name: string
  surname: string
  decision: 'offline' | 'online' | 'not'
}

export const CheckIn = () => {
  const [isLoading, setIsLoading] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormState>({
    defaultValues: {
      decision: 'offline',
    },
  })

  const onSubmit: SubmitHandler<FormState> = async data => {
    setIsLoading(true)
    try {
      const res = await axios.post('/api/check-in', data)
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
    <div className='hero flex min-h-screen justify-center bg-gradient-to-t from-secondary to-base-200 px-4'>
      <div className='flex flex-col items-center gap-8'>
        <h2 className='text-lg md:text-2xl'>Страница подтверждения</h2>
        <form
          className='flex flex-col gap-4'
          noValidate={true}
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className='flex w-full flex-col gap-2'>
            <input
              disabled={isLoading}
              className={clsx(
                'input-bordered input w-full',
                errors.name && 'input-error',
              )}
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
                'input-bordered input w-full',
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

          <label className='flex cursor-pointer items-center gap-4'>
            <input
              disabled={isLoading}
              type='radio'
              value='offline'
              className='radio-accent radio'
              {...register('decision')}
            />
            <span className='label-text text-sm md:text-lg'>
              Приду в Полярис 5 и 6 ноября
            </span>
          </label>

          <label className='flex cursor-pointer items-center gap-4'>
            <input
              disabled={isLoading}
              type='radio'
              value='online'
              className='radio-accent radio'
              {...register('decision')}
            />
            <span className='label-text text-sm md:text-lg'>
              Буду смотреть онлайн трансляцию
            </span>
          </label>

          <label className='flex cursor-pointer items-center gap-4'>
            <input
              disabled={isLoading}
              type='radio'
              value='not'
              className='radio-accent radio'
              {...register('decision')}
            />
            <span className='label-text text-sm md:text-lg'>
              Не приду и не буду смотреть трансляцию
            </span>
          </label>

          <button
            className={clsx('btn-accent btn', isLoading && 'loading')}
            disabled={isLoading}
          >
            Подтвердить
          </button>
        </form>
      </div>
    </div>
  )
}
