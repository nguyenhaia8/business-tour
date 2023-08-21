import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { baseTheme } from '../themes'
export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={baseTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
