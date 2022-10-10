import type { NextPage } from 'next'
import { useRouter } from 'next/router'

const Home: NextPage = () => {
  const router = useRouter()

  return (
    <div className='hero min-h-screen'>
      <div className='hero-overlay bg-base-300/60'></div>
      <div className='hero-content text-center text-neutral-content'>
        <div className='max-w-full'>
          <h1 className='mb-5 text-[24px] font-bold text-white md:text-[48px]'>
            Email успешно подтвержден
          </h1>

          <button
            className='btn-secondary btn'
            onClick={() => router.push('/')}
          >
            Перейти на главную
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home
