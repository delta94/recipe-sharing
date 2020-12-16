/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/button-has-type */
import { useState, useRef, ChangeEvent } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import Image from 'next/image'
import Router from 'next/router'
import { getSession } from 'next-auth/client'
import Layout from '@components/Layout'
import format from 'date-fns/format'
import axios from 'axios'
import authAxios from '@utils/axios'
import { useToast } from '@chakra-ui/react'
import isValid from 'date-fns/isValid'
import parseISO from 'date-fns/parseISO'

const EditProfile = ({ profile }) => {
  const [startDate, setStartDate] = useState(
    isValid(parseISO(profile?.birthday)) ? new Date(profile?.birthday) : Date.now()
  )
  const editRef = useRef(null)
  const [imageUrl, setImageUrl] = useState(profile?.avatar.startsWith('http') && profile?.avatar)
  const [awsUrl, setAwsUrl] = useState(profile?.avatar.startsWith('http') && profile?.avatar)
  const toast = useToast()
  const [loading, setLoading] = useState(false)

  const getBase64 = (file: File, callback) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => callback(reader.result)
  }

  const uploadFile = async (signedRequest, file) => {
    try {
      await axios.put(signedRequest, file, {
        headers: {
          'Content-Type': file.type,
        },
      })
      toast({
        title: 'Success',
        description: 'Image uploaded successfully!',
        status: 'success',
        position: 'top',
        duration: 2000,
        isClosable: true,
      })
    } catch (error) {
      console.log(error)
      return toast({
        title: 'Error',
        description: 'Error uploading image!',
        status: 'error',
        position: 'top',
        duration: 3000,
        isClosable: true,
      })
    }
  }

  const onImageChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files[0]
    getBase64(file, (url) => {
      setImageUrl(url)
    })
    const { data } = await axios.get('http://localhost:3001/api/sign-s3', {
      params: {
        'file-name': file.name,
        'file-type': file.type,
      },
    })
    const { signedRequest, url } = data

    await uploadFile(signedRequest, file)
    setAwsUrl(url)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const form = editRef.current
    const birthday = format(new Date(form.birthday.value), 'dd-MM-yyyy')
    const name = form.name.value
    const gender = form.gender.value

    if (!birthday || !name || !gender) {
      return toast({
        title: 'Error',
        description: 'All fields are required!',
        status: 'error',
        position: 'top',
        duration: 3000,
        isClosable: true,
      })
    }

    setLoading(true)

    authAxios
      .put(`/profile`, {
        name,
        birthday,
        avatar: awsUrl,
        gender,
      })
      .then(() => {
        setLoading(false)

        toast({
          title: 'Success',
          description: 'Updated profile successfully!',
          status: 'success',
          position: 'top',
          duration: 1500,
          isClosable: true,
        })
      })
      .catch((err) => {
        console.log(err)
        setLoading(false)
        return toast({
          title: 'Error',
          description: 'Error updating profile!',
          status: 'error',
          position: 'top',
          duration: 3000,
          isClosable: true,
        })
      })
  }

  return (
    <Layout title='Edit Profile'>
      <div className='mt-6 bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6'>
        <div className='md:grid md:grid-cols-3 md:gap-6'>
          <div className='md:col-span-1'>
            <h3 className='text-lg font-medium leading-6 text-gray-900'>Personal Information</h3>
            <p className='mt-1 text-sm leading-5 text-gray-500'>Use a permanent address where you can receive mail.</p>
          </div>
          <div className='mt-5 md:mt-0 md:col-span-2'>
            <form ref={editRef} onSubmit={handleSubmit}>
              <div className='grid grid-cols-6 gap-6'>
                <div className='col-span-6'>
                  <label htmlFor='name' className='block text-sm font-medium leading-5 text-gray-700'>
                    Full name
                  </label>
                  <input
                    id='name'
                    name='name'
                    defaultValue={profile?.name}
                    className='mt-1 form-input block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5'
                  />
                </div>

                <div className='col-span-6 sm:col-span-4'>
                  <label htmlFor='birthday' className='block text-sm font-medium leading-5 text-gray-700'>
                    Birthday
                  </label>

                  <DatePicker
                    id='birthday'
                    name='birthday'
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
                    name='gender'
                    defaultValue={profile?.gender ? 'Male' : 'True'}
                    className='mt-1 block form-select w-full py-2 px-3 py-0 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5'>
                    <option value='Male'>Male</option>
                    <option value='Female'>Female</option>
                  </select>
                </div>

                <div className='mt-6 mb-6 col-span-6'>
                  <label htmlFor='photo' className='block text-sm leading-5 font-medium text-gray-700'>
                    Photo
                  </label>
                  <div className='mt-2 flex items-center'>
                    {imageUrl && (
                      <span className='inline-block h-12 w-12 overflow-hidden bg-gray-100'>
                        <figure>
                          <Image
                            className='w-full rounded-md object-cover'
                            src={imageUrl}
                            alt=''
                            width='48'
                            height='48'
                          />
                        </figure>
                      </span>
                    )}

                    <span className='ml-5 rounded-md shadow-sm'>
                      <input
                        name='cover'
                        type='file'
                        onChange={onImageChange}
                        accept='image/png, image/jpeg'
                        className='py-2 px-3 border border-gray-300 rounded-md text-sm leading-4 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition duration-150 ease-in-out'
                      />
                    </span>
                  </div>
                </div>
              </div>
              <div className='px-4 py-3  text-right sm:px-6'>
                <span className='inline-flex rounded-md shadow-sm'>
                  <button
                    disabled={loading}
                    type='submit'
                    className='inline-flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out'>
                    Save
                  </button>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  )
}

EditProfile.getInitialProps = async ({ req, res }): Promise<any> => {
  try {
    const session = await getSession({ req })

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
    console.log(error)
    return { profile: null }
  }
}

export default EditProfile
