/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/naming-convention */
import { useRef } from 'react'
import Router from 'next/router'
import axios from 'axios'
import { useToast } from '@chakra-ui/react'

import { getSession } from 'next-auth/client'
import Logo from '../assets/logo.svg'

const Signup = () => {
  const signUpRef = useRef(null)
  const toast = useToast()

  const onSubmit = async (event) => {
    event.preventDefault()

    const form = signUpRef.current
    const email = form.email.value
    const name = form.name.value
    const password_confirmation = form.password_confirmation.value
    const password = form.password.value
    try {
      await axios({
        method: 'POST',
        url: 'http://localhost:3000/api/v1/auth/signup',
        data: {
          email,
          password,
          name,
          password_confirmation,
        },
      })
      toast({
        title: 'Success',
        description: 'Signed up successfully!',
        status: 'success',
        position: 'top',
        duration: 3000,
        isClosable: true,
      })

      setTimeout(() => {
        Router.push('/signin')
      }, 1000)
    } catch (error) {
      console.log(error)
      return toast({
        title: 'Error',
        description: 'An Unexpected error occurred',
        status: 'error',
        position: 'top',
        duration: 3000,
        isClosable: true,
      })
    }
  }

  return (
    <div className='min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8'>
      <div className='sm:mx-auto sm:w-full sm:max-w-md'>
        <div className='flex justify-center'>
          <Logo />
        </div>
        <h2 className='mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900'>Sign up</h2>
      </div>

      <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
        <div className='bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10'>
          <form ref={signUpRef} onSubmit={onSubmit}>
            <div>
              <label htmlFor='name' className='block text-sm font-medium leading-5 text-gray-700'>
                Name
              </label>
              <div className='mt-1 rounded-md shadow-sm'>
                <input
                  id='name'
                  type='text'
                  name='name'
                  required
                  className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5'
                />
              </div>
            </div>

            <div className='mt-6'>
              <label htmlFor='email' className='block text-sm font-medium leading-5 text-gray-700'>
                Email address
              </label>
              <div className='mt-1 rounded-md shadow-sm'>
                <input
                  id='email'
                  type='email'
                  name='email'
                  required
                  className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5'
                />
              </div>
            </div>

            <div className='mt-6'>
              <label htmlFor='password' className='block text-sm font-medium leading-5 text-gray-700'>
                Password
              </label>
              <div className='mt-1 rounded-md shadow-sm'>
                <input
                  id='password'
                  type='password'
                  name='password'
                  required
                  className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5'
                />
              </div>
            </div>

            <div className='mt-6'>
              <label htmlFor='password_confirmation' className='block text-sm font-medium leading-5 text-gray-700'>
                Password Confirmation
              </label>
              <div className='mt-1 rounded-md shadow-sm'>
                <input
                  id='password_confirmation'
                  type='password'
                  name='password_confirmation'
                  required
                  className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5'
                />
              </div>
            </div>

            <div className='mt-6'>
              <span className='block w-full rounded-md shadow-sm'>
                <button
                  type='submit'
                  className='w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out'>
                  Sign up
                </button>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

Signup.getInitialProps = async ({ req, res }): Promise<any> => {
  try {
    const session = await getSession({ req })
    if (session?.user?.name) {
      if (res) {
        res.writeHead(302, { Location: '/' })
        res.end()
      } else {
        Router.push('/')
      }
    }
  } catch (error) {
    return {}
  }
}

export default Signup
