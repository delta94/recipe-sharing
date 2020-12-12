/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react'
import { EditorState } from 'draft-js'
import dynamic from 'next/dynamic'
import Layout from '../../components/Layout'

const Editor = dynamic(() => import('react-draft-wysiwyg').then((mod) => mod.Editor), { ssr: false })

export default function NewPost() {
  const [editorState, setEditorState] = useState(() => EditorState.createEmpty())

  return (
    <Layout title='New Post'>
      <div className='sm:col-span-2 mb-4'>
        <label htmlFor='title' className='block text-sm font-medium leading-5 text-gray-700'>
          Title
        </label>
        <div className='mt-1 relative rounded-md shadow-sm'>
          <input id='title' className='form-input py-3 px-4 block w-full transition ease-in-out duration-150' />
        </div>
      </div>
      <Editor
        editorState={editorState}
        toolbarClassName='toolbarClassName'
        wrapperClassName='wrapperClassName'
        editorClassName='editorClassName'
        onEditorStateChange={setEditorState}
      />

      <div className='sm:col-span-2 mt-4'>
        <span className='w-full inline-flex rounded-md shadow-sm'>
          <button
            type='button'
            className='w-full inline-flex items-center justify-center px-6 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150'>
            Create
          </button>
        </span>
      </div>
    </Layout>
  )
}
