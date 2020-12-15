/* eslint-disable react/prop-types */
import '../styles/tailwind.css'
import { ChakraProvider, CSSReset } from '@chakra-ui/react'
import { Provider } from 'next-auth/client'
import theme from '../theme/style'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Provider session={pageProps.session}>
        <CSSReset />
        <Component {...pageProps} />
      </Provider>
    </ChakraProvider>
  )
}

export default MyApp
