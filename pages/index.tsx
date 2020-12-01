/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { Transition } from '@headlessui/react'
import { useState } from 'react'

export default function Home() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='min-h-screen bg-gray-100'>
      <div className='bg-indigo-800 pb-32'>
        <nav className='bg-indigo-800 border-b border-indigo-400 border-opacity-25 lg:border-none'>
          <div className='max-w-7xl mx-auto px-2 sm:px-4 lg:px-8'>
            <div className='relative h-16 flex items-center justify-between lg:border-b lg:border-indigo-400 lg:border-opacity-25'>
              <div className='px-2 flex items-center lg:px-0'>
                <div className='flex-shrink-0'>
                  <img
                    className='block h-8 w-auto'
                    src='https://tailwindui.com/img/logos/v1/workflow-mark-indigo-300.svg'
                    alt='Workflow'
                  />
                </div>
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
                            <a
                              href='#'
                              className='block py-2 px-4 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out'
                              role='menuitem'>
                              Your Profile
                            </a>
                            <a
                              href='#'
                              className='block py-2 px-4 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out'
                              role='menuitem'>
                              Settings
                            </a>
                            <a
                              href='#'
                              className='block py-2 px-4 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out'
                              role='menuitem'>
                              Sign out
                            </a>
                          </div>
                        </div>
                      )}
                    </Transition>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='hidden lg:hidden'>
            <div className='px-2 pt-2 pb-3'>
              <a
                href='#'
                className='block bg-indigo-900 rounded-md py-2 px-3 text-base font-medium text-white focus:outline-none focus:text-white focus:bg-indigo-700 transition duration-150 ease-in-out'>
                Dashboard
              </a>
              <a
                href='#'
                className='block mt-1 rounded-md py-2 px-3 text-base font-medium text-white hover:text-white hover:bg-indigo-700 focus:outline-none focus:text-white focus:bg-indigo-700 transition duration-150 ease-in-out'>
                Team
              </a>
              <a
                href='#'
                className='block mt-1 rounded-md py-2 px-3 text-base font-medium text-white hover:text-white hover:bg-indigo-700 focus:outline-none focus:text-white focus:bg-indigo-700 transition duration-150 ease-in-out'>
                Projects
              </a>
              <a
                href='#'
                className='block mt-1 rounded-md py-2 px-3 text-base font-medium text-white hover:text-white hover:bg-indigo-700 focus:outline-none focus:text-white focus:bg-indigo-700 transition duration-150 ease-in-out'>
                Calendar
              </a>
            </div>
            <div className='pt-4 pb-3 border-t border-indigo-400 border-opacity-25'>
              <div className='px-5 flex items-center'>
                <div className='flex-shrink-0'>
                  <img
                    className='rounded-full h-10 w-10'
                    src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                    alt=''
                  />
                </div>
                <div className='ml-3'>
                  <div className='text-base font-medium leading-6 text-white'>Tom Cook</div>
                  <div className='text-sm font-medium leading-5 text-indigo-300'>tom@example.com</div>
                </div>
              </div>
              <div className='mt-3 px-2'>
                <a
                  href='#'
                  className='block rounded-md py-2 px-3 text-base font-medium text-indigo-300 hover:text-white hover:bg-indigo-700 focus:outline-none focus:text-white focus:bg-indigo-700 transition duration-150 ease-in-out'>
                  Your Profile
                </a>
                <a
                  href='#'
                  className='block mt-1 rounded-md py-2 px-3 text-base font-medium text-indigo-300 hover:text-white hover:bg-indigo-700 focus:outline-none focus:text-white focus:bg-indigo-700 transition duration-150 ease-in-out'>
                  Settings
                </a>
                <a
                  href='#'
                  className='block mt-1 rounded-md py-2 px-3 text-base font-medium text-indigo-300 hover:text-white hover:bg-indigo-700 focus:outline-none focus:text-white focus:bg-indigo-700 transition duration-150 ease-in-out'>
                  Sign out
                </a>
              </div>
            </div>
          </div>
        </nav>
        <header className='py-10'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <h1 className='text-3xl leading-9 font-bold text-white'>Home</h1>
          </div>
        </header>
      </div>

      <main className='-mt-32'>
        <div className='max-w-7xl mx-auto pb-12 px-4 sm:px-6 lg:px-8'>
          <div className='relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8'>
            <div className='absolute inset-0'>
              <div className='bg-white h-1/3 sm:h-2/3' />
            </div>
            <div className='relative mb-8'>
              <h2 className='text-gray-500 text-xs font-medium uppercase tracking-wide'>Food</h2>
              <ul className='mt-3 grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4'>
                <li className='col-span-1 flex items-center bg-white border border-gray-200 rounded-md shadow-sm overflow-hidden'>
                  <div className='flex-shrink-0 flex items-center justify-center w-16 h-16 text-white text-center text-sm leading-5 font-medium bg-pink-600'>
                    <img
                      src='https://regevelya.com/wp-content/uploads/2015/10/vietnamese-pho-ga.jpg'
                      alt='Pho ga'
                      className='h-full object-cover'
                    />
                  </div>
                  <div className='flex-1 px-4 py-2 truncate'>
                    <a
                      href='#'
                      className='text-gray-900 text-sm leading-5 font-medium hover:text-gray-600 transition ease-in-out duration-150'>
                      Pho Ga
                    </a>
                  </div>
                  <div className='flex-shrink-0 pr-2'>
                    <button className='w-8 h-8 inline-flex items-center justify-center text-gray-400 rounded-full bg-transparent hover:text-gray-500 focus:outline-none focus:text-gray-500 focus:bg-gray-100 transition ease-in-out duration-150'>
                      <svg className='w-5 h-5' viewBox='0 0 20 20' fill='currentColor'>
                        <path d='M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z' />
                      </svg>
                    </button>
                  </div>
                </li>
                <li className='col-span-1 flex items-center bg-white border border-gray-200 rounded-md shadow-sm overflow-hidden'>
                  <div className='flex-shrink-0 flex items-center justify-center w-16 h-16 text-white text-center text-sm leading-5 font-medium bg-purple-600'>
                    <img
                      src='https://regevelya.com/wp-content/uploads/2015/10/pizza-italy.jpg'
                      alt='pizza'
                      className='h-full object-cover'
                    />
                  </div>
                  <div className='flex-1 px-4 py-2 truncate'>
                    <a
                      href='#'
                      className='text-gray-900 text-sm leading-5 font-medium hover:text-gray-600 transition ease-in-out duration-150'>
                      Pizza
                    </a>
                  </div>
                  <div className='flex-shrink-0 pr-2'>
                    <button className='w-8 h-8 inline-flex items-center justify-center text-gray-400 rounded-full bg-transparent hover:text-gray-500 focus:outline-none focus:text-gray-500 focus:bg-gray-100 transition ease-in-out duration-150'>
                      <svg className='w-5 h-5' viewBox='0 0 20 20' fill='currentColor'>
                        <path d='M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z' />
                      </svg>
                    </button>
                  </div>
                </li>
                <li className='col-span-1 flex items-center bg-white border border-gray-200 rounded-md shadow-sm overflow-hidden'>
                  <div className='flex-shrink-0 flex items-center justify-center w-16 h-16 text-white text-center text-sm leading-5 font-medium bg-orange-500'>
                    <img
                      src='https://regevelya.com/wp-content/uploads/2015/10/food-montenegro.jpg'
                      alt='Beef'
                      className='h-full object-cover'
                    />
                  </div>
                  <div className='flex-1 px-4 py-2 truncate'>
                    <a
                      href='#'
                      className='text-gray-900 text-sm leading-5 font-medium hover:text-gray-600 transition ease-in-out duration-150'>
                      Beef
                    </a>
                  </div>
                  <div className='flex-shrink-0 pr-2'>
                    <button className='w-8 h-8 inline-flex items-center justify-center text-gray-400 rounded-full bg-transparent hover:text-gray-500 focus:outline-none focus:text-gray-500 focus:bg-gray-100 transition ease-in-out duration-150'>
                      <svg className='w-5 h-5' viewBox='0 0 20 20' fill='currentColor'>
                        <path d='M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z' />
                      </svg>
                    </button>
                  </div>
                </li>
                <li className='col-span-1 flex items-center bg-white border border-gray-200 rounded-md shadow-sm overflow-hidden'>
                  <div className='flex-shrink-0 flex items-center justify-center w-16 h-16 text-white text-center text-sm leading-5 font-medium bg-green-400'>
                    <img
                      src='https://regevelya.com/wp-content/uploads/2013/11/greek-salad.jpg'
                      alt='Salad'
                      className='h-full object-cover'
                    />
                  </div>
                  <div className='flex-1 px-4 py-2 truncate'>
                    <a
                      href='#'
                      className='text-gray-900 text-sm leading-5 font-medium hover:text-gray-600 transition ease-in-out duration-150'>
                      Salad
                    </a>
                  </div>
                  <div className='flex-shrink-0 pr-2'>
                    <button className='w-8 h-8 inline-flex items-center justify-center text-gray-400 rounded-full bg-transparent hover:text-gray-500 focus:outline-none focus:text-gray-500 focus:bg-gray-100 transition ease-in-out duration-150'>
                      <svg className='w-5 h-5' viewBox='0 0 20 20' fill='currentColor'>
                        <path d='M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z' />
                      </svg>
                    </button>
                  </div>
                </li>
              </ul>
            </div>
            <div className='relative max-w-7xl mx-auto'>
              <div className='text-center'>
                <h2 className='text-3xl leading-9 tracking-tight font-extrabold text-gray-900 sm:text-4xl sm:leading-10'>
                  Recent publications
                </h2>
                <p className='mt-3 max-w-2xl mx-auto text-xl leading-7 text-gray-500 sm:mt-4'>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa libero labore natus atque, ducimus sed.
                </p>
              </div>
              <div className='mt-12 grid gap-5 max-w-lg mx-auto lg:grid-cols-3 lg:max-w-none'>
                <div className='flex flex-col rounded-lg shadow-lg overflow-hidden'>
                  <div className='flex-shrink-0'>
                    <img
                      className='h-48 w-full object-cover'
                      src='https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F7407466.jpg&q=85'
                      alt=''
                    />
                  </div>
                  <div className='flex-1 bg-white p-6 flex flex-col justify-between'>
                    <div className='flex-1'>
                      <p className='text-sm leading-5 font-medium text-indigo-600'>
                        <a href='#' className='hover:underline'>
                          Food
                        </a>
                      </p>
                      <a href='#' className='block'>
                        <h3 className='mt-2 text-xl leading-7 font-semibold text-gray-900'>Skillet Lasagna</h3>
                        <p className='mt-3 text-base leading-6 text-gray-500'>
                          This no-bake skillet lasagna is made right on your stovetop and is a fast and easy alternative
                          to store-bought hamburger mixes!
                        </p>
                      </a>
                    </div>
                    <div className='mt-6 flex items-center'>
                      <div className='flex-shrink-0'>
                        <a href='#'>
                          <img
                            className='h-10 w-10 rounded-full'
                            src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                            alt=''
                          />
                        </a>
                      </div>
                      <div className='ml-3'>
                        <p className='text-sm leading-5 font-medium text-gray-900'>
                          <a href='#' className='hover:underline'>
                            Manh Hung
                          </a>
                        </p>
                        <div className='flex text-sm leading-5 text-gray-500'>
                          <time dateTime='2020-03-16'>Dec 2, 2020</time>
                          <span className='mx-1'>&middot;</span>
                          <span>6 min read</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='flex flex-col rounded-lg shadow-lg overflow-hidden'>
                  <div className='flex-shrink-0'>
                    <img
                      className='h-48 w-full object-cover'
                      src='https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F4847147.jpg'
                      alt=''
                    />
                  </div>
                  <div className='flex-1 bg-white p-6 flex flex-col justify-between'>
                    <div className='flex-1'>
                      <p className='text-sm leading-5 font-medium text-indigo-600'>
                        <a href='#' className='hover:underline'>
                          Food
                        </a>
                      </p>
                      <a href='#' className='block'>
                        <h3 className='mt-2 text-xl leading-7 font-semibold text-gray-900'>Cranberry Orange Bread</h3>
                        <p className='mt-3 text-base leading-6 text-gray-500'>
                          This cranberry orange bread is great for breakfast or a snack. You can also make muffins; just
                          spoon the batter into greased muffin cups and bake at 375 degrees F (190 C) for 15 to 20
                          minutes.
                        </p>
                      </a>
                    </div>
                    <div className='mt-6 flex items-center'>
                      <div className='flex-shrink-0'>
                        <a href='#'>
                          <img
                            className='h-10 w-10 rounded-full'
                            src='https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                            alt=''
                          />
                        </a>
                      </div>
                      <div className='ml-3'>
                        <p className='text-sm leading-5 font-medium text-gray-900'>
                          <a href='#' className='hover:underline'>
                            Duc Minh
                          </a>
                        </p>
                        <div className='flex text-sm leading-5 text-gray-500'>
                          <time dateTime='2020-03-16'>Dec 2, 2020</time>
                          <span className='mx-1'>&middot;</span>
                          <span>6 min read</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='flex flex-col rounded-lg shadow-lg overflow-hidden'>
                  <div className='flex-shrink-0'>
                    <img
                      className='h-48 w-full object-cover'
                      src='https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F8746641.jpg'
                      alt=''
                    />
                  </div>
                  <div className='flex-1 bg-white p-6 flex flex-col justify-between'>
                    <div className='flex-1'>
                      <p className='text-sm leading-5 font-medium text-indigo-600'>
                        <a href='#' className='hover:underline'>
                          {' '}
                          Food
                        </a>
                      </p>
                      <a href='#' className='block'>
                        <h3 className='mt-2 text-xl leading-7 font-semibold text-gray-900'>
                          Slow Cooker Sweet and Sour Chicken Thighs
                        </h3>
                        <p className='mt-3 text-base leading-6 text-gray-500'>
                          This family-friendly dinner is just as good as takeout but made really easily in your slow
                          cooker. We like to serve it with rice.
                        </p>
                      </a>
                    </div>
                    <div className='mt-6 flex items-center'>
                      <div className='flex-shrink-0'>
                        <a href='#'>
                          <img
                            className='h-10 w-10 rounded-full'
                            src='https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                            alt=''
                          />
                        </a>
                      </div>
                      <div className='ml-3'>
                        <p className='text-sm leading-5 font-medium text-gray-900'>
                          <a href='#' className='hover:underline'>
                            Huong Tra
                          </a>
                        </p>
                        <div className='flex text-sm leading-5 text-gray-500'>
                          <time dateTime='2020-03-16'>Dec 2, 2020</time>
                          <span className='mx-1'>&middot;</span>
                          <span>6 min read</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
