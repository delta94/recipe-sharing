/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/button-has-type */
const Profile = () => (
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
                  {/* <a
                    href='#'
                    className='ml-4 rounded-md py-2 px-3 text-sm leading-5 font-medium text-white hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700 transition duration-150 ease-in-out'>
                    Team
                  </a>
                  <a
                    href='#'
                    className='ml-4 rounded-md py-2 px-3 text-sm leading-5 font-medium text-white hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700 transition duration-150 ease-in-out'>
                    Projects
                  </a>
                  <a
                    href='#'
                    className='ml-4 rounded-md py-2 px-3 text-sm leading-5 font-medium text-white hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700 transition duration-150 ease-in-out'>
                    Calendar
                  </a> */}
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
                      aria-haspopup='true'>
                      <span className='sr-only'>Open profile menu</span>
                      <img
                        className='rounded-full h-8 w-8'
                        src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                        alt=''
                      />
                    </button>
                  </div>

                  <div className='origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg'>
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
          <h1 className='text-3xl leading-9 font-bold text-white'>Profile</h1>
        </div>
      </header>
    </div>

    <main className='-mt-32'>
      <div className='max-w-7xl mx-auto pb-12 px-4 sm:px-6 lg:px-8'>
        <div className='bg-white rounded-lg shadow px-5 py-6 sm:px-6'>
          <div className='mt-6 bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6'>
            <div className='space-y-1'>
              {/* <h3 className='text-lg leading-6 font-medium text-gray-900'>Personal Information</h3> */}
              {/* <p className='max-w-2xl text-sm leading-5 text-gray-500'>Personal details and application.</p> */}
            </div>
            <div className='mt-6 border-t border-gray-200'>
              <dl className='divide-y divide-gray-200'>
                <div className='py-4 space-y-1 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4'>
                  <dt className='text-sm leading-5 font-medium text-gray-500'>Full name</dt>
                  <dd className='flex space-x-4 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2'>
                    <span className='flex-grow'> Do Manh Hung</span>
                    <span className='flex-shrink-0'>
                      <button
                        type='button'
                        className='font-medium text-indigo-600 hover:text-indigo-500 transition duration-150 ease-in-out'>
                        Update
                      </button>
                    </span>
                  </dd>
                </div>
                {/* <div className='py-4 space-y-1 sm:grid sm:py-5 sm:grid-cols-3 sm:gap-4'>
                  <dt className='text-sm leading-5 font-medium text-gray-500'>Application for</dt>
                  <dd className='flex space-x-4 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2'>
                    <span className='flex-grow'> Backend Developer</span>
                    <span className='flex-shrink-0'>
                      <button
                        type='button'
                        className='font-medium text-indigo-600 hover:text-indigo-500 transition duration-150 ease-in-out'>
                        Update
                      </button>
                    </span>
                  </dd>
                </div> */}
                <div className='py-4 space-y-1 sm:grid sm:py-5 sm:grid-cols-3 sm:gap-4'>
                  <dt className='text-sm leading-5 font-medium text-gray-500'>Email address</dt>
                  <dd className='flex space-x-4 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2'>
                    <span className='flex-grow'> mhughdo@gmail.com</span>
                    <span className='flex-shrink-0'>
                      <button
                        type='button'
                        className='font-medium text-indigo-600 hover:text-indigo-500 transition duration-150 ease-in-out'>
                        Update
                      </button>
                    </span>
                  </dd>
                </div>
                <div className='py-4 space-y-1 sm:grid sm:py-5 sm:grid-cols-3 sm:gap-4'>
                  <dt className='text-sm leading-5 font-medium text-gray-500'>Gender</dt>
                  <dd className='flex space-x-4 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2'>
                    <span className='flex-grow'> Female</span>
                    <span className='flex-shrink-0'>
                      <button
                        type='button'
                        className='font-medium text-indigo-600 hover:text-indigo-500 transition duration-150 ease-in-out'>
                        Update
                      </button>
                    </span>
                  </dd>
                </div>
                <div className='py-4 space-y-1 sm:grid sm:py-5 sm:grid-cols-3 sm:gap-4'>
                  <dt className='text-sm leading-5 font-medium text-gray-500'>Year</dt>
                  <dd className='flex space-x-4 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2'>
                    <span className='flex-grow'> 1999</span>
                    <span className='flex-shrink-0'>
                      <button
                        type='button'
                        className='font-medium text-indigo-600 hover:text-indigo-500 transition duration-150 ease-in-out'>
                        Update
                      </button>
                    </span>
                  </dd>
                </div>
                {/* <div className='py-4 space-y-1 sm:grid sm:py-5 sm:grid-cols-3 sm:gap-4'>
                  <dt className='text-sm leading-5 font-medium text-gray-500'>Salary expectation</dt>
                  <dd className='flex space-x-4 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2'>
                    <span className='flex-grow'> $120,000</span>
                    <span className='flex-shrink-0'>
                      <button
                        type='button'
                        className='font-medium text-indigo-600 hover:text-indigo-500 transition duration-150 ease-in-out'>
                        Update
                      </button>
                    </span>
                  </dd>
                </div> */}
                <div className='py-4 space-y-1 sm:grid sm:py-5 sm:grid-cols-3 sm:gap-4'>
                  <dt className='text-sm leading-5 font-medium text-gray-500'>About</dt>
                  <dd className='flex space-x-4 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2'>
                    <span className='flex-grow'>
                      Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat.
                      Excepteur qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia
                      proident. Irure nostrud pariatur mollit ad adipisicing reprehenderit deserunt qui eu.
                    </span>
                    <span className='flex-shrink-0'>
                      <button
                        type='button'
                        className='font-medium text-indigo-600 hover:text-indigo-500 transition duration-150 ease-in-out'>
                        Update
                      </button>
                    </span>
                  </dd>
                </div>
                {/* <div className='py-4 space-y-1 sm:grid sm:py-5 sm:grid-cols-3 sm:gap-4'>
                  <dt className='text-sm leading-5 font-medium text-gray-500'>Attachments</dt>
                  <dd className='text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2'>
                    <ul className='border border-gray-200 rounded-md divide-y divide-gray-200'>
                      <li className='pl-3 pr-4 py-3 flex items-center justify-between space-x-4 text-sm leading-5'>
                        <div className='w-0 flex-1 flex items-center space-x-2'>
                          <svg
                            className='flex-shrink-0 h-5 w-5 text-gray-400'
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 20 20'
                            fill='currentColor'>
                            <path
                              fillRule='evenodd'
                              d='M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z'
                              clipRule='evenodd'
                            />
                          </svg>
                          <span className='flex-1 w-0 truncate'>resume_back_end_developer.pdf</span>
                        </div>
                        <div className='flex-shrink-0 flex space-x-4'>
                          <button
                            type='button'
                            className='font-medium text-indigo-600 hover:text-indigo-500 transition duration-150 ease-in-out'>
                            Update
                          </button>
                          <span className='text-gray-300' aria-hidden='true'>
                            |
                          </span>
                          <button
                            type='button'
                            className='font-medium text-indigo-600 hover:text-indigo-500 transition duration-150 ease-in-out'>
                            Remove
                          </button>
                        </div>
                      </li>
                      <li className='pl-3 pr-4 py-3 flex items-center justify-between space-x-4 text-sm leading-5'>
                        <div className='w-0 flex-1 flex items-center space-x-2'>
                          <svg
                            className='flex-shrink-0 h-5 w-5 text-gray-400'
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 20 20'
                            fill='currentColor'>
                            <path
                              fillRule='evenodd'
                              d='M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z'
                              clipRule='evenodd'
                            />
                          </svg>
                          <span className='flex-1 w-0 truncate'>coverletter_back_end_developer.pdf</span>
                        </div>
                        <div className='flex-shrink-0 flex space-x-4'>
                          <button
                            type='button'
                            className='font-medium text-indigo-600 hover:text-indigo-500 transition duration-150 ease-in-out'>
                            Update
                          </button>
                          <span className='text-gray-300' aria-hidden='true'>
                            |
                          </span>
                          <button
                            type='button'
                            className='font-medium text-indigo-600 hover:text-indigo-500 transition duration-150 ease-in-out'>
                            Remove
                          </button>
                        </div>
                      </li>
                    </ul>
                  </dd>
                </div> */}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
)

export default Profile
