/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState, useEffect } from 'react'
import { useToast, Select, IconButton } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'
import axios from '@utils/axios'
import Link from 'next/link'
import Layout from '../components/Layout'

export default function Home() {
  const [foodTypes, setFoodTypes] = useState([])
  const [countries, setCountries] = useState([])
  const [foodType, setFoodType] = useState(0)
  const [country, setCountry] = useState(0)
  const [posts, setPosts] = useState([])
  useEffect(() => {
    axios
      .get('/food_types')
      .then(({ data }) => setFoodTypes(data))
      .catch((err) => console.log(err))
    axios
      .get('/countries')
      .then(({ data }) => setCountries(data))
      .catch((err) => console.log(err))
    axios
      .get('/posts')
      .then(({ data }) => setPosts(data))
      .catch((err) => console.log(err))
  }, [])

  const search = () => {
    console.log(foodType, country)
    if (foodType && country) {
      axios
        .get(`/posts?country_id=${country}&&food_type_id=${foodType}`)
        .then(({ data }) => setPosts(data))
        .catch((err) => console.log(err))
    } else if (foodType) {
      axios
        .get(`/posts?food_type_id=${foodType}`)
        .then(({ data }) => setPosts(data))
        .catch((err) => console.log(err))
    } else if (country) {
      axios
        .get(`/posts?country_id=${country}`)
        .then(({ data }) => setPosts(data))
        .catch((err) => console.log(err))
    } else {
      axios
        .get('/posts')
        .then(({ data }) => setPosts(data))
        .catch((err) => console.log(err))
    }
  }

  return (
    <Layout title='Home'>
      <div className='flex mb-4'>
        <Select
          placeholder='Select food type'
          mr={5}
          onChange={(event) => {
            setFoodType(event.target.value)
          }}>
          {foodTypes.map((f) => (
            <option key={f.id} value={f.id}>
              {f.name}
            </option>
          ))}
        </Select>
        <Select placeholder='Select country' mr={5} onChange={(event) => setCountry(event.target.value)}>
          {countries.map((c) => (
            <option key={c.id} value={c.id}>
              {c.name}
            </option>
          ))}
        </Select>
        <IconButton colorSchema='blue' aria-label='Search' icon={<SearchIcon />} onClick={search}>
          Search
        </IconButton>
      </div>
      <div className='relative max-w-7xl mx-auto mt-10'>
        <div className='text-center'>
          <h2 className='text-3xl leading-9 tracking-tight font-extrabold text-gray-900 sm:text-4xl sm:leading-10'>
            Food from all over the world
          </h2>
          {/* <p className='mt-3 max-w-2xl mx-auto text-xl leading-7 text-gray-500 sm:mt-4'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa libero labore natus atque, ducimus sed.
          </p> */}
        </div>
        <div className='mt-12 grid gap-5 max-w-lg mx-auto lg:grid-cols-3 lg:max-w-none'>
          {posts.map((item) => (
            <Link href={`/post/${item.id}`}>
              <div className='flex flex-col rounded-lg shadow-lg overflow-hidden'>
                <div className='flex-shrink-0'>
                  <img
                    className='h-48 w-full object-cover'
                    src={
                      item?.image !== '/' || !item?.image
                        ? item?.image
                        : 'https://ca-times.brightspotcdn.com/dims4/default/444499c/2147483647/strip/true/crop/3000x2000+0+0/resize/840x560!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F7d%2F24%2F0d9fed4c40c285ffca41843ae569%2Fdecadefood.jpg'
                    }
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
                          src={
                            item?.user_avatar
                              ? item?.user_avatar
                              : 'https://redtridentinc.com/wp-content/uploads/2019/08/blank-profile-hi-300x225.png'
                          }
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
