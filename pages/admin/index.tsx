/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/anchor-is-valid */
import axios from '@utils/axios'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import Router, { useRouter } from 'next/router'
import { getSession } from 'next-auth/client'
import Layout from '../../components/Layout'

const Admin = () => {
  const router = useRouter()
  const [error, setError] = useState(true)
  const [dataSource, setDataSource] = useState([])

  const initData = async () => {
    try {
      const { data } = await axios({
        url: `/posts/unconfirmed`,
        method: 'get',
      })
      setDataSource(data)
      setError(false)
    } catch (error_) {
      setError(true)
      console.log(error_)
    }
  }
  useEffect(() => {
    if (error) initData()
  }, [initData])
  return (
    <Layout title='Admin'>
      <div className='relative mx-auto text-gray-600 w-2/3 mb-10'>
        <input
          className='border-2 border-gray-300 w-full bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none'
          type='search'
          name='search'
          placeholder='Search'
        />
        <button type='submit' className='absolute right-2 top-2.5 '>
          <svg
            className='text-gray-600 h-4 w-4 fill-current'
            xmlns='http://www.w3.org/2000/svg'
            xmlnsXlink='http://www.w3.org/1999/xlink'
            version='1.1'
            id='Capa_1'
            x='0px'
            y='0px'
            viewBox='0 0 56.966 56.966'
            xmlSpace='preserve'
            width='512px'
            height='512px'>
            <path d='M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z' />
          </svg>
        </button>
      </div>
      <div className='flex flex-col items-center'>
        <div className='-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
          <div className='py-2 align-middle inline-block min-w-3/4 sm:px-6 lg:px-8'>
            <div className='shadow overflow-hidden border-b border-gray-200 sm:rounded-lg'>
              <table className='min-w-3/4 divide-y divide-gray-200'>
                <thead className='bg-gray-50'>
                  <tr>
                    <th
                      scope='col'
                      className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                      Name
                    </th>
                    <th
                      scope='col'
                      className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                      Title
                    </th>
                    <th
                      scope='col'
                      className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                      Action
                    </th>
                    <th scope='col' className='relative px-6 py-3'>
                      <span className='sr-only'>Edit</span>
                    </th>
                  </tr>
                </thead>
                {dataSource.map((item) => (
                  <tbody className='bg-white divide-y divide-gray-200'>
                    <tr>
                      <td className='px-6 py-4 whitespace-nowrap'>
                        <div className='flex items-center'>
                          <div className='flex-shrink-0 h-10 w-10'>
                            <img
                              className='h-10 w-10 rounded-full'
                              src={
                                item?.user_avatar
                                  ? item?.user_avatar
                                  : 'https://redtridentinc.com/wp-content/uploads/2019/08/blank-profile-hi-300x225.png'
                              }
                              alt=''
                            />
                          </div>
                          <div className='ml-4'>
                            <div className='text-sm font-medium text-gray-900'>{item.user_name}</div>
                          </div>
                        </div>
                      </td>
                      <td className='px-6 py-4 whitespace-nowrap'>
                        <div className='text-sm text-gray-900'>{item.title}</div>
                        <div className='text-sm text-gray-500'>{item.food_name}</div>
                      </td>
                      <td className='px-1 py-4 whitespace-nowrap'>
                        <button className='h-8 px-4 m-2 text-sm text-white transition-colors duration-150 bg-green-700 rounded-lg hover:bg-indigo-800'>
                          <Link href={`/admin/posts/${item.id}`}>
                            <a>Show</a>
                          </Link>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                ))}
              </table>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

Admin.getInitialProps = async ({ req, res }): Promise<any> => {
  try {
    const session = await getSession({ req })
    if (!session?.full_info?.is_admin) {
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

export default Admin
