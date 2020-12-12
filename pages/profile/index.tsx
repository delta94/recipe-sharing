/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/button-has-type */
import Layout from '../../components/Layout'

const Profile = () => (
  <Layout title='Profile'>
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
                  Excepteur qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident.
                  Irure nostrud pariatur mollit ad adipisicing reprehenderit deserunt qui eu.
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
  </Layout>
)

export default Profile
