/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { Transition } from '@headlessui/react'
import { useState } from 'react'
import { useSession, signOut } from 'next-auth/client'
import Link from 'next/link'

export default function Layout({ title, children }: { title: string; children: any }) {
  const [isOpen, setIsOpen] = useState(false)
  const [session, loading] = useSession()

  return (
    <div className='min-h-screen bg-gray-100'>
      <div className='bg-indigo-800 pb-32'>
        <nav className='bg-indigo-800 border-b border-indigo-400 border-opacity-25 lg:border-none'>
          <div className='max-w-7xl mx-auto px-2 sm:px-4 lg:px-8'>
            <div className='relative h-16 flex items-center justify-between lg:border-b lg:border-indigo-400 lg:border-opacity-25'>
              <div className='px-2 flex items-center lg:px-0'>
                <Link href='/'>
                  <div className='flex-shrink-0 cursor-pointer'>
                    <img
                      className='block h-8 w-auto'
                      src='https://tailwindui.com/img/logos/v1/workflow-mark-indigo-300.svg'
                      alt='Workflow'
                    />
                  </div>
                </Link>

                <div className='hidden lg:block lg:ml-6'>
                  <div className='flex'>
                    <a
                      href='#'
                      className='rounded-md bg-indigo-900 py-2 px-3 text-sm leading-5 font-medium text-white hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700 transition duration-150 ease-in-out'>
                      Posts
                    </a>
                  </div>
                </div>
              </div>
              <div className='flex-1 px-2 flex justify-center lg:ml-6 lg:justify-end'>
                <div className='max-w-lg w-full lg:max-w-xs'>
                  <label htmlFor='search' className='sr-only'>
                    Search
                  </label>
                  <div className='relative'>
                    <div
                      className='pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center'
                      aria-hidden='true'>
                      <svg className='h-5 w-5 text-gray-400' fill='currentColor' viewBox='0 0 20 20'>
                        <path
                          fillRule='evenodd'
                          d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
                          clipRule='evenodd'
                        />
                      </svg>
                    </div>
                    <input
                      id='search'
                      className='block w-full bg-white py-2 pl-10 pr-3 border border-transparent rounded-md leading-5 placeholder-gray-500 focus:outline-none focus:border-indigo-300 focus:shadow-outline-indigo sm:text-sm transition duration-150 ease-in-out'
                      placeholder='Search'
                      type='search'
                    />
                  </div>
                </div>
              </div>
              <div className='flex lg:hidden'>
                <button
                  className='p-2 rounded-md inline-flex items-center justify-center text-indigo-300 hover:text-white hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700 focus:text-white transition duration-150 ease-in-out'
                  aria-expanded='false'>
                  <span className='sr-only'>Open main menu</span>

                  <svg
                    className='block flex-shrink-0 h-6 w-6'
                    aria-hidden='true'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16M4 18h16' />
                  </svg>

                  <svg
                    className='hidden flex-shrink-0 h-6 w-6'
                    aria-hidden='true'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12' />
                  </svg>
                </button>
              </div>
              <div className='hidden lg:block lg:ml-4'>
                <div className='flex items-center'>
                  <button className='flex-shrink-0 border-2 border-transparent rounded-full p-1 text-indigo-300 hover:text-white focus:outline-none focus:text-white focus:bg-indigo-700 transition duration-150 ease-in-out'>
                    <span className='sr-only'>View notifications</span>

                    <svg
                      className='h-6 w-6'
                      aria-hidden='true'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'>
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9'
                      />
                    </svg>
                  </button>
                  {!loading && session?.user?.name ? (
                    <>
                      {' '}
                      <span className='inline-flex rounded-md shadow-sm'>
                        <Link href='/post/new'>
                          <a
                            href='/post/new'
                            className='inline-flex items-center justify-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150'>
                            Create post
                          </a>
                        </Link>
                      </span>
                      <div className='relative flex-shrink-0 ml-4'>
                        <div>
                          <button
                            className='rounded-full flex text-sm text-white focus:outline-none focus:shadow-solid transition duration-150 ease-in-out'
                            id='user-menu'
                            aria-haspopup='true'
                            onClick={() => setIsOpen(!isOpen)}>
                            <span className='sr-only'>Open profile menu</span>
                            <img
                              className='rounded-full h-8 w-8'
                              src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                              alt=''
                            />
                          </button>
                        </div>

                        <Transition
                          show={isOpen}
                          enter='transition ease-out duration-100'
                          enterFrom='transform opacity-0 scale-95'
                          enterTo='transform opacity-100 scale-100'
                          leave='transition ease-in duration-75'
                          leaveFrom='transform opacity-100 scale-100'
                          leaveTo='transform opacity-0 scale-95'>
                          {(ref) => (
                            <div ref={ref} className='origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg'>
                              <div
                                className='py-1 bg-white rounded-md shadow-xs'
                                role='menu'
                                aria-orientation='vertical'
                                aria-labelledby='user-menu'>
                                <Link href='/profile'>
                                  <a
                                    href='/profile'
                                    className='block py-2 px-4 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out'
                                    role='menuitem'>
                                    Your Profile
                                  </a>
                                </Link>
                                <a
                                  href='#'
                                  className='block py-2 px-4 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out'
                                  role='menuitem'>
                                  Settings
                                </a>
                                <button
                                  onClick={() => signOut()}
                                  className='block py-2 px-4 w-full text-left text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out'
                                  role='menuitem'>
                                  Sign out
                                </button>
                              </div>
                            </div>
                          )}
                        </Transition>
                      </div>{' '}
                    </>
                  ) : (
                    <div className='flex items-center space-x-8'>
                      <Link href='/signin'>
                        <a
                          href='/signin'
                          className='text-base leading-6 font-medium text-white hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150'>
                          Sign in
                        </a>
                      </Link>

                      <span className='inline-flex rounded-md shadow-sm'>
                        <Link href='/signup'>
                          <a
                            href='signup'
                            className='inline-flex items-center justify-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150'>
                            Sign up
                          </a>
                        </Link>
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </nav>
        <header className='py-10'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <h1 className='text-3xl leading-9 font-bold text-white'>{title}</h1>
          </div>
        </header>
      </div>

      <main className='-mt-32'>
        <div className='max-w-7xl mx-auto pb-12 px-4 sm:px-6 lg:px-8'>
          <div className='relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8'>
            {/* <div className='absolute inset-0'>
              <div className='bg-white h-1/3 sm:h-2/3' />
            </div> */}
            {children}
          </div>
        </div>
      </main>
    </div>
  )
}
