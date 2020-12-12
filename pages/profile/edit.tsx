/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/button-has-type */
import { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import Layout from '../../components/Layout'

const Profile = () => {
  const [startDate, setStartDate] = useState(new Date())

  return (
    <Layout title='Edit Profile'>
      <div className='mt-6 bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6'>
        <div className='md:grid md:grid-cols-3 md:gap-6'>
          <div className='md:col-span-1'>
            <h3 className='text-lg font-medium leading-6 text-gray-900'>Personal Information</h3>
            <p className='mt-1 text-sm leading-5 text-gray-500'>Use a permanent address where you can receive mail.</p>
          </div>
          <div className='mt-5 md:mt-0 md:col-span-2'>
            <form action='#' method='POST'>
              <div className='grid grid-cols-6 gap-6'>
                <div className='col-span-6'>
                  <label htmlFor='first_name' className='block text-sm font-medium leading-5 text-gray-700'>
                    Full name
                  </label>
                  <input
                    id='first_name'
                    className='mt-1 form-input block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5'
                  />
                </div>

                <div className='col-span-6 sm:col-span-4'>
                  <label htmlFor='birthday' className='block text-sm font-medium leading-5 text-gray-700'>
                    Birthday
                  </label>

                  <DatePicker
                    id='birthday'
                    className='mt-1 form-input block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5'
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                  />
                </div>

                <div className='col-span-6 sm:col-span-4'>
                  <label htmlFor='gender' className='block text-sm font-medium leading-5 text-gray-700'>
                    Gender
                  </label>

                  <select
                    id='gender'
                    className='mt-1 block form-select w-full py-2 px-3 py-0 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5'>
                    <option>Male</option>
                    <option>Female</option>
                  </select>
                </div>

                <div className='mt-6 col-span-6'>
                  <label htmlFor='photo' className='block text-sm leading-5 font-medium text-gray-700'>
                    Photo
                  </label>
                  <div className='mt-2 flex items-center'>
                    <span className='inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100'>
                      <svg className='h-full w-full text-gray-300' fill='currentColor' viewBox='0 0 24 24'>
                        <path d='M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z' />
                      </svg>
                    </span>
                    <span className='ml-5 rounded-md shadow-sm'>
                      <button
                        type='button'
                        className='py-2 px-3 border border-gray-300 rounded-md text-sm leading-4 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition duration-150 ease-in-out'>
                        Change
                      </button>
                    </span>
                  </div>
                </div>
              </div>
            </form>
            <div className='px-4 py-3  text-right sm:px-6'>
              <span className='inline-flex rounded-md shadow-sm'>
                <button
                  type='submit'
                  className='inline-flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out'>
                  Save
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Profile
