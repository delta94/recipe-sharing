/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable no-shadow */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { getSession } from 'next-auth/client'
import { EditorState, convertToRaw } from 'draft-js'
import dynamic from 'next/dynamic'
import { useState, ChangeEvent, useEffect, useRef } from 'react'
import Image from 'next/image'
import authAxios from '@utils/axios'
import axios from 'axios'
import { useToast, Select, Spinner } from '@chakra-ui/react'
import draftToHtml from 'draftjs-to-html'
import Router from 'next/router'
import Layout from '../../components/Layout'

const Editor = dynamic(() => import('react-draft-wysiwyg').then((mod) => mod.Editor), { ssr: false })

function NewPost() {
  const [editorState, setEditorState] = useState(() => EditorState.createEmpty())
  const [imageUrl, setImageUrl] = useState('')
  const [awsUrl, setAwsUrl] = useState('')
  const [awsLoading, setAwsLoading] = useState(false)
  const toast = useToast()
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [foodTypes, setFoodTypes] = useState([])
  const [countries, setCountries] = useState([])
  const [foodName, setFoodName] = useState('')
  const [loading, setLoading] = useState(false)
  const fTRef = useRef(null)
  const cRef = useRef(null)

  useEffect(() => {
    authAxios
      .get('/food_types')
      .then(({ data }) => setFoodTypes(data))
      .catch((err) => console.log(err))
    authAxios
      .get('/countries')
      .then(({ data }) => setCountries(data))
      .catch((err) => console.log(err))
  }, [])

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
      setAwsLoading(false)
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
    try {
      const file = e.target.files[0]
      getBase64(file, (url) => {
        setImageUrl(url)
      })

      setAwsLoading(true)
      const { data } = await axios.get('http://localhost:3001/api/sign-s3', {
        params: {
          'file-name': file.name,
          'file-type': file.type,
        },
      })
      const { signedRequest, url } = data

      await uploadFile(signedRequest, file)
      setAwsUrl(url)
      setAwsLoading(false)
    } catch (error) {
      console.log(error)
      setAwsLoading(false)
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

  const onEditorChange = (editorState) => {
    setEditorState(editorState)
    setContent(draftToHtml(convertToRaw(editorState.getCurrentContent())))
  }

  const handleCreatePost = () => {
    if (!title || !content || !cRef.current.value || !fTRef.current.value || !foodName) {
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
      .post('posts', {
        title,
        content,
        food_type_id: fTRef.current.value,
        country_id: cRef.current.value,
        image: awsUrl,
        food_name: foodName,
      })
      .then(() => {
        setLoading(false)

        toast({
          title: 'Success',
          description: 'Created post successfully!',
          status: 'success',
          position: 'top',
          duration: 3000,
          isClosable: true,
        })
        setTimeout(() => {
          Router.push('/')
        }, 1500)
      })
      .catch((err) => {
        console.log(err)
        setLoading(false)
        return toast({
          title: 'Error',
          description: 'Error creating post!',
          status: 'error',
          position: 'top',
          duration: 3000,
          isClosable: true,
        })
      })
  }

  return (
    <Layout title='New Post'>
      <div className='sm:col-span-2 mb-4'>
        <label htmlFor='title' className='block text-sm font-medium leading-5 text-gray-700'>
          Title
        </label>
        <div className='mt-1 relative rounded-md shadow-sm'>
          <input
            id='title'
            className='form-input py-3 px-4 block w-full transition ease-in-out duration-150'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
      </div>

      <div className='sm:col-span-2 mb-4'>
        <label htmlFor='food_name' className='block text-sm font-medium leading-5 text-gray-700'>
          Food name
        </label>
        <div className='mt-1 relative rounded-md shadow-sm'>
          <input
            id='food_name'
            className='form-input py-3 px-4 block w-full transition ease-in-out duration-150'
            value={foodName}
            onChange={(e) => setFoodName(e.target.value)}
          />
        </div>
      </div>
      <div className='mt-6 mb-6 col-span-6'>
        <label htmlFor='photo' className='block text-sm leading-5 font-medium text-gray-700'>
          Photo
        </label>
        <div className='mt-2 flex items-center'>
          {imageUrl && (
            <span className='inline-block h-2/6 w-2/6 overflow-hidden bg-gray-100'>
              <figure>
                <Image className='w-full rounded-md object-cover' src={imageUrl} alt='' width='1024' height='768' />
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
          {awsLoading && (
            <Spinner thickness='4px' speed='0.65s' emptyColor='gray.200' color='blue.500' size='lg' ml={4} />
          )}
        </div>
      </div>
      <div className='flex mb-4'>
        <Select placeholder='Select food type' ref={fTRef} mr={4}>
          {foodTypes.map((f) => (
            <option key={f.id} value={f.id}>
              {f.name}
            </option>
          ))}
        </Select>
        <Select placeholder='Select country' ref={cRef}>
          {countries.map((c) => (
            <option key={c.id} value={c.id}>
              {c.name}
            </option>
          ))}
        </Select>
      </div>
      <Editor
        editorState={editorState}
        toolbarClassName='toolbarClassName'
        wrapperClassName='wrapperClassName'
        editorClassName='editorClassName'
        onEditorStateChange={onEditorChange}
      />

      <div className='sm:col-span-2 mt-4'>
        <span className='w-full inline-flex rounded-md shadow-sm'>
          <button
            type='button'
            disabled={loading}
            onClick={handleCreatePost}
            className='w-full inline-flex items-center justify-center px-6 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150'>
            Create
          </button>
        </span>
      </div>
    </Layout>
  )
}

NewPost.getInitialProps = async ({ req, res }): Promise<any> => {
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

export default NewPost
