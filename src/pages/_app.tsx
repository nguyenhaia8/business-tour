import type {AppProps} from 'next/app'
import {ChakraProvider} from '@chakra-ui/react'
import {baseTheme} from '../themes'
import {Bungee} from 'next/font/google'
import {wrapper} from '@/store/store'

const bungee = Bungee({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
})

function App({Component, pageProps}: AppProps) {
  return (
    <ChakraProvider theme={baseTheme}>
      <main className={bungee.className}>
        <Component {...pageProps} />
      </main>
    </ChakraProvider>
  )
}

export default wrapper.withRedux(App)
