// File: app/layout.tsx
import type { Metadata } from 'next'
import { Rajdhani } from 'next/font/google'
import "../styles/globals.css"

// ⬇️ Se usi la config runtime di Flowbite React (.flowbite-react/config.json),
// importa ThemeInit e montalo (altrimenti puoi rimuovere queste 2 righe).
// Regola il path in base a dove sta la cartella ".flowbite-react":
// import ThemeInit from '../.flowbite-react/init'

const rajdhani = Rajdhani({
  variable: '--font-rajdhani',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'MangaQuest',
  description: 'Gestisci, scopri e colleziona manga con la tua libreria personale.',
  icons: [{ rel: 'icon', url: '/favicon.ico' }],
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="it" className="dark">
      <body
        className={`${rajdhani.variable} bg-background text-white antialiased min-h-dvh`}
      >
        {/* <ThemeInit /> */}
        {children}
      </body>
    </html>
  )
}
