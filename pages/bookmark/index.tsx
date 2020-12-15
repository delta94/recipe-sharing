/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from 'react'
import axios from '@utils/axios'
import Layout from '@components/Layout'
import Link from 'next/link'

export default function Bookmark() {
  const [error, setError] = useState(true)
  const [dataSource, setDataSource] = useState([])

  const initData = async () => {
    try {
      const { data } = await axios({
        url: `/v1/bookmarks/all`,
        method: 'get',
      })
      setDataSource(data)
      setError(false)
      debugger
    } catch (error_) {
      setError(true)
      console.log(error_)
    }
  }
  useEffect(() => {
    if (error) initData()
  }, [initData])
  return (
    <Layout title='Bookmark'>
      <div className='relative max-w-7xl mx-auto'>
        <div className='text-center'>
          <h2 className='text-3xl leading-9 tracking-tight font-extrabold text-gray-900 sm:text-4xl sm:leading-10'>
            Your bookmarks
          </h2>
        </div>
        <div className='mt-12 grid gap-5 max-w-lg mx-auto lg:grid-cols-3 lg:max-w-none'>
          {dataSource.map(item => (
            <Link href={`/post/${item.id}`}>
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
                      <a href='' className='hover:underline'>
                        {item?.food_name} - {item?.food_type_name} - {item?.country_name}
                      </a>
                    </p>
                    <a href='' className='block'>
                      <h3 className='mt-2 text-xl leading-7 font-semibold text-gray-900'>{item?.title}</h3>
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
                          {item?.user_name}
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  )
}
