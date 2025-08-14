import type { AppProps } from 'next/app';
import '../styles/globals.css';
import 'flowbite-react';
import { ThemeInit } from '../.flowbite-react/init';
import { ThemeProvider } from 'flowbite-react';
import TopNavBar from "../components/TopNavBar"
import Banner from '../components/Banner';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <ThemeInit />
      <TopNavBar />
        <Banner /> {/* 👈 2. Aggiungi il banner */}
            <Component {...pageProps} />
    </ThemeProvider>
  );
}
