/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/indent */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from 'react'
import axios from '@utils/axios'
import Layout from '@components/Layout'
import Link from 'next/link'
import Router from 'next/router'
import { getSession } from 'next-auth/client'
import { Button } from '@chakra-ui/react'

const MyPost = () => {
  const [error, setError] = useState(true)
  const [dataSource, setDataSource] = useState([])

  useEffect(() => {
    const initData = async () => {
      try {
        const { data } = await axios({
          url: `/posts/me`,
          method: 'get',
        })
        setDataSource(data)
        setError(false)
      } catch (error_) {
        setError(true)
        console.log(error_)
      }
    }
    if (error) initData()
  }, [error])

  return (
    <Layout title='My Post'>
      <div className='relative max-w-7xl mx-auto'>
        <div className='text-center'>
          <h2 className='text-3xl leading-9 tracking-tight font-extrabold text-gray-900 sm:text-4xl sm:leading-10'>
            My post
          </h2>
        </div>
        <div className='mt-12 grid gap-5 max-w-lg mx-auto lg:grid-cols-3 lg:max-w-none'>
          {dataSource.map((item) => (
            <div className='flex flex-col rounded-lg shadow-lg overflow-hidden cursor-pointer'>
              <div className='flex-shrink-0'>
                <img
                  className='h-48 w-full object-cover'
                  src={
                    item?.image?.startsWith('http')
                      ? item?.image
                      : 'https://ca-times.brightspotcdn.com/dims4/default/444499c/2147483647/strip/true/crop/3000x2000+0+0/resize/840x560!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F7d%2F24%2F0d9fed4c40c285ffca41843ae569%2Fdecadefood.jpg'
                  }
                  alt=''
                />
              </div>
              <div className='flex-1 bg-white p-6 flex flex-col justify-between'>
                <div className='flex-1'>
                  <p className='text-sm leading-5 font-medium text-indigo-600'>
                    <a href='#' className='hover:underline'>
                      {item?.food_name} - {item?.food_type_name} - {item?.country_name}
                    </a>
                  </p>
                  <a href='#' className='block'>
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
                  <div className='ml-3 flex justify-between'>
                    <p className='text-sm leading-5 font-medium text-gray-900'>
                      <a href='#' className='hover:underline'>
                        {item?.user_name}
                      </a>
                    </p>
                  </div>
                </div>
                {!item.is_confirm ? (
                  <div className='mt-3 flex justify-between'>
                    <span className='inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium leading-5 bg-gray-100 text-gray-800'>
                      Not approved
                    </span>
                    <Link href={`/post/${item.id}/edit`}>
                      <Button>Edit</Button>
                    </Link>
                  </div>
                ) : (
                    <div className='mt-3 flex justify-between'>
                      <Link href={`/post/${item.id}`}>
                        <Button>Show</Button>
                      </Link>
                    </div>
                  )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

MyPost.getInitialProps = async ({ req, res }): Promise<any> => {
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
    return {}
  } catch (error) {
    return {}
  }
}

export default MyPost
