/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/button-has-type */
import format from 'date-fns/format'
import Image from 'next/image'
import Link from 'next/link'
import Router from 'next/router'
import { getSession } from 'next-auth/client'
import axios from 'axios'
import isValid from 'date-fns/isValid'
import parseISO from 'date-fns/parseISO'
import Layout from '../../components/Layout'

const Profile = ({ profile }) => (
  <Layout title='Profile'>
    <div className='bg-white rounded-lg shadow px-5 py-6 sm:px-6'>
      <div className='mt-6 bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6'>
        <div className='space-y-1'>
          {/* <h3 className='text-lg leading-6 font-medium text-gray-900'>Personal Information</h3> */}
          {/* <p className='max-w-2xl text-sm leading-5 text-gray-500'>Personal details and application.</p> */}
        </div>
        <div className='mt-6 col-span-6 flex justify-center'>
          <div className='mt-2 flex items-center'>
            <Image
              className='w-full rounded-md object-cover'
              src={
                profile?.avatar.startsWith('http')
                  ? profile?.avatar
                  : 'https://www.gravatar.com/avatar/86b862d65a8e66b9db99136cd16ff394?default=https%3A%2F%2Fcloud.digitalocean.com%2Favatars%2Fdefault1.png&amp;secure=true"'
              }
              alt=''
              width='48'
              height='48'
            />
          </div>
        </div>
        <div className='text-right'>
          <Link href='/profile/edit'>
            <a
              href='/profile/edit'
              className='text-base leading-6 font-medium text-purple-600 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150'>
              Edit
            </a>
          </Link>
        </div>
        <div className='mt-6 border-t border-gray-200'>
          <dl className='divide-y divide-gray-200'>
            <div className='py-4 space-y-1 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4'>
              <dt className='text-sm leading-5 font-medium text-gray-500'>Full name</dt>
              <dd className='flex space-x-4 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2'>
                <span className='flex-grow'> {profile?.name} </span>
              </dd>
            </div>
            <div className='py-4 space-y-1 sm:grid sm:py-5 sm:grid-cols-3 sm:gap-4'>
              <dt className='text-sm leading-5 font-medium text-gray-500'>Email address</dt>
              <dd className='flex space-x-4 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2'>
                <span className='flex-grow'> {profile?.email}</span>
              </dd>
            </div>
            <div className='py-4 space-y-1 sm:grid sm:py-5 sm:grid-cols-3 sm:gap-4'>
              <dt className='text-sm leading-5 font-medium text-gray-500'>Gender</dt>
              <dd className='flex space-x-4 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2'>
                <span className='flex-grow'> {profile?.gender ? 'Male' : 'Female'}</span>
              </dd>
            </div>
            <div className='py-4 space-y-1 sm:grid sm:py-5 sm:grid-cols-3 sm:gap-4'>
              <dt className='text-sm leading-5 font-medium text-gray-500'>Birthday</dt>
              <dd className='flex space-x-4 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2'>
                <span className='flex-grow'>
                  {isValid(parseISO(profile?.birthday)) && format(new Date(profile?.birthday), 'dd-MM-yyyy')}
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
          </dl>
        </div>
      </div>
    </div>
  </Layout>
)

Profile.getInitialProps = async ({ req, res }): Promise<any> => {
  const session = await getSession({ req })
  try {
    if (!session?.user?.name) {
      if (res) {
        res.writeHead(302, { Location: '/' })
        res.end()
      } else {
        Router.push('/')
      }
    }
    const { data } = await axios.get('http://localhost:3000/api/v1/profile', {
      headers: { Authorization: session?.token },
    })

    return { profile: data }
  } catch (error) {
    return { profile: null }
  }
}

export default Profile
