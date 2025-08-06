import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Poppins, M_PLUS_Rounded_1c, Nunito_Sans, Noto_Sans_JP } from 'next/font/google'

// Font setup
const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '600', '700'], variable: '--font-poppins' })
const mPlus = M_PLUS_Rounded_1c({ subsets: ['latin'], weight: ['400', '500', '700'], variable: '--font-mplus' })
const nunito = Nunito_Sans({ subsets: ['latin'], weight: ['400', '600', '700'], variable: '--font-nunito' })
const notoJP = Noto_Sans_JP({ subsets: ['latin'], weight: ['400', '500', '700'], variable: '--font-notojp' })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${poppins.variable} ${mPlus.variable} ${nunito.variable} ${notoJP.variable}`}>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
      </main>
    )
  }