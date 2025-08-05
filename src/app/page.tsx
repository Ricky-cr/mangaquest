import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Poppins, M_PLUS_Rounded_1c, Nunito_Sans, Noto_Sans_JP } from 'next/font/google'


// Font principali
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
})

const mPlus = M_PLUS_Rounded_1c({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-mplus',
})

const nunito = Nunito_Sans({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-nunito',
})

const notoJP = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-notojp',
})


// Componente principale dell'app
export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${poppins.variable} ${mPlus.variable} ${nunito.variable} ${notoJP.variable}`}>
      <Component {...pageProps} />
    </main>
  )
}
