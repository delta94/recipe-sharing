import Logo from '../assets/logo.svg'

const PasswordReset = () => (
  <div className='min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8'>
    <div className='sm:mx-auto sm:w-full sm:max-w-md'>
      <div className='flex justify-center'>
        <Logo />
      </div>
      <h2 className='mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900'>Reset your password</h2>
    </div>

    <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
      <div className='bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10'>
        <form action='#' method='POST'>
          <div>
            <label htmlFor='email' className='block text-sm font-medium leading-5 text-gray-700'>
              Email address
            </label>
            <div className='mt-1 rounded-md shadow-sm'>
              <input
                id='email'
                type='email'
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
                Reset
              </button>
            </span>
          </div>
        </form>
      </div>
    </div>
  </div>
)

export default PasswordReset
