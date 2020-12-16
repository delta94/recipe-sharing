/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/indent */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/anchor-is-valid */
import Image from 'next/image'
import Layout from '@components/Layout'
import { useRouter } from 'next/router'
import axios from '@utils/axios'
import { useEffect, useState } from 'react'

export default function PostDetail() {
  const router = useRouter()
  const [dataSource, setDataSource] = useState() as any
  const [error, setError] = useState(true)
  const initData = async () => {
    const { id } = router.query
    try {
      const { data } = await axios({
        url: `/posts/${id}`,
        method: 'get',
      })
      setDataSource(data)
      document.querySelector('#content').innerHTML = data?.content
      setError(false)
      debugger
    } catch (error_) {
      setError(true)
      if (error_?.response.status === 403) {
        alert('Bài viết chưa được phê duyệt')
        router.push('/')
      }
    }
  }
  useEffect(() => {
    if (error) initData()
  }, [initData])

  const confirmPost = async () => {
    const { id } = router.query
    try {
      const data = await axios({
        url: `/posts/${id}/confirm`,
        method: 'put'
      })
      if (data.status === 200) {
        alert('Xác nhận thành công bài viết')
        router.push('/admin')
      }

    } catch (error_) {
      console.log(error_)
    }
  }
  return (
    <Layout title='Post'>
      <span className='px-10 flex items-center justify-between'>
        <div className='flex items-center'>
          <Image
            className='w-full rounded-full'
            src={dataSource?.user_avatar ? dataSource.user_avatar : 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F7515079.jpg&q=85'}
            alt=''
            width='40'
            height='40'
          />
          <b className='pl-5'>{dataSource?.user_name}</b>
          <b className='text-blue-500 uppercase ml-5'>{`${dataSource?.country_name}`}</b>
        </div>
        <div className='flex items-center'>
          <button onClick={confirmPost} className='h-8 px-4 m-2 text-sm text-white transition-colors duration-150 bg-indigo-700 rounded-lg hover:bg-indigo-800'>
            Confirm
          </button>
        </div>
      </span>
      <div className='relative py-10 bg-white overflow-hidden'>
        <div className='hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full'>
          <div className='relative h-full text-lg max-w-prose mx-auto'>
            <svg
              className='absolute top-12 left-full transform translate-x-32'
              width='404'
              height='384'
              fill='none'
              viewBox='0 0 404 384'>
              <defs>
                <pattern
                  id='74b3fd99-0a6f-4271-bef2-e80eeafdf357'
                  x='0'
                  y='0'
                  width='20'
                  height='20'
                  patternUnits='userSpaceOnUse'>
                  <rect x='0' y='0' width='4' height='4' className='text-gray-200' fill='currentColor' />
                </pattern>
              </defs>
              <rect width='404' height='384' fill='url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)' />
            </svg>
            <svg
              className='absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32'
              width='404'
              height='384'
              fill='none'
              viewBox='0 0 404 384'>
              <defs>
                <pattern
                  id='f210dbf6-a58d-4871-961e-36d5016a0f49'
                  x='0'
                  y='0'
                  width='20'
                  height='20'
                  patternUnits='userSpaceOnUse'>
                  <rect x='0' y='0' width='4' height='4' className='text-gray-200' fill='currentColor' />
                </pattern>
              </defs>
              <rect width='404' height='384' fill='url(#f210dbf6-a58d-4871-961e-36d5016a0f49)' />
            </svg>
            <svg
              className='absolute bottom-12 left-full transform translate-x-32'
              width='404'
              height='384'
              fill='none'
              viewBox='0 0 404 384'>
              <defs>
                <pattern
                  id='d3eb07ae-5182-43e6-857d-35c643af9034'
                  x='0'
                  y='0'
                  width='20'
                  height='20'
                  patternUnits='userSpaceOnUse'>
                  <rect x='0' y='0' width='4' height='4' className='text-gray-200' fill='currentColor' />
                </pattern>
              </defs>
              <rect width='404' height='384' fill='url(#d3eb07ae-5182-43e6-857d-35c643af9034)' />
            </svg>
          </div>
        </div>
        <div className='relative px-4 sm:px-6 lg:px-8'>
          <div className='text-lg max-w-prose mx-auto mb-6'>
            <p className='text-base text-center leading-6 text-indigo-600 font-semibold tracking-wide uppercase'>
              {dataSource?.food_name} - {dataSource?.food_type_name}
            </p>
            <h1 className='mt-2 mb-8 text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10'>
              {dataSource?.title}
            </h1>
            <p className='text-xl text-gray-500 leading-8' />
          </div>
          <div className='prose prose-lg text-gray-500 mx-auto flex flex-col items-center'>
            <figure>
              <Image
                className='w-full rounded-lg'
                src={dataSource?.image ? dataSource.image : 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F7515079.jpg&q=85'}
                alt=''
                width='768'
                height='576'
              />
            </figure>
            <div id='content' style={{ width: '75%' }} className='mt-10' />
          </div>
        </div>
      </div>
    </Layout>
  )
}
