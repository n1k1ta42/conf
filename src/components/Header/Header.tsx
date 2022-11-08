import Link from 'next/link'
import { useRouter } from 'next/router'

export const Header = () => {
  const router = useRouter()

  return (
    <header className='absolute inset-x-0 top-0 flex h-[75px] justify-center bg-base-300 px-2 shadow-2xl'>
      <div className='relative flex w-[752px] items-center'>
        <div className='absolute left-1/2 hidden -translate-x-1/2 gap-10 md:flex'>
          <Link href='/'>
            <a className='link-hover'>Главная</a>
          </Link>
          <label htmlFor='regulations' className='link-hover'>
            Регламент
          </label>
        </div>
        {/*{!(router.asPath === '/form' || router.asPath === '/check-in') && (*/}
        {/*  <button*/}
        {/*    className='btn-sm btn absolute right-0 hidden md:block'*/}
        {/*    onClick={() => router.push('/form')}*/}
        {/*  >*/}
        {/*    Принять участие*/}
        {/*  </button>*/}
        {/*)}*/}
        <div className='dropdown-end dropdown absolute right-0 md:hidden'>
          <label tabIndex={0} className='btn-circle btn'>
            <svg
              className='swap-off fill-current'
              xmlns='http://www.w3.org/2000/svg'
              width='32'
              height='32'
              viewBox='0 0 512 512'
            >
              <path d='M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z' />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className='dropdown-content menu rounded-box w-52 bg-neutral bg-base-300 p-2 shadow'
          >
            <li>
              <Link href='/'>
                <a className='link-hover'>Главная</a>
              </Link>
            </li>
            <li>
              <label htmlFor='regulations' className='link-hover'>
                Регламент
              </label>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}
