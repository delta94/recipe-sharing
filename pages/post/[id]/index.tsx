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
import { BsBookmarkFill, BsBookmark } from 'react-icons/bs'

export default function PostDetail() {
  const router = useRouter()
  const [dataSource, setDataSource] = useState() as any
  const [error, setError] = useState(true)
  const [bookmarkQuantity, setBookmarkQuantity] = useState(0)
  const [isBookmarked, setIsBookmarked] = useState(false)
  const initData = async () => {
    const { id } = router.query
    try {
      const { data } = await axios({
        url: `/posts/${id}`,
        method: 'get',
      })
      setDataSource(data)
      setBookmarkQuantity(data.bookmark_quantity)
      setIsBookmarked(data.is_bookmarked)
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

  const bookmark = async () => {
    setIsBookmarked(true)
    setBookmarkQuantity(bookmarkQuantity + 1)
    try {
      await axios({
        url: `/bookmarks`,
        method: 'post',
        data: { post_id: dataSource.id }
      })
    } catch (error_) {
      console.log(error_)
    }
  }

  const unBookmark = async () => {
    setIsBookmarked(false)
    setBookmarkQuantity(bookmarkQuantity - 1)
    try {
      await axios({
        url: `/bookmarks`,
        method: 'delete',
        data: { post_id: dataSource.id }
      })
      debugger
    } catch (error_) {
      console.log(error_)
    }
  }

  return (
    <Layout title='Post'>
      <span className='px-10 flex items-center justify-between'>
        <div className='flex items-center'>
          <img
            className='h-10 w-10 rounded-full'
            src={
              dataSource?.user_avatar
                ? dataSource?.user_avatar
                : 'https://redtridentinc.com/wp-content/uploads/2019/08/blank-profile-hi-300x225.png'
            }
            alt=''
          />
          <b className='pl-5'>{dataSource?.user_name}</b>
          <b className='text-blue-500 uppercase ml-5'>{`${dataSource?.country_name}`}</b>
        </div>
        <div className='flex items-center'>
          <p className='font-bold mr-10'>Bookmark: {bookmarkQuantity}</p>
          {isBookmarked ? (
            <BsBookmarkFill color='#3730a3' size={24} onClick={unBookmark} />
          ) : (
              <BsBookmark color='#3730a3' size={24} onClick={bookmark} />
            )}
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
              <img
                className='h-48 w-full object-cover'
                src={
                  dataSource?.image !== '/' || !dataSource?.image
                    ? dataSource?.image
                    : 'https://ca-times.brightspotcdn.com/dims4/default/444499c/2147483647/strip/true/crop/3000x2000+0+0/resize/840x560!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F7d%2F24%2F0d9fed4c40c285ffca41843ae569%2Fdecadefood.jpg'
                }
                alt=''
              />
            </figure>
            <div id='content' style={{ width: '75%' }} className='mt-10' />
          </div>
        </div>
      </div>
    </Layout>
  )
}
