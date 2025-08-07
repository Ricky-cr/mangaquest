import type { AppProps } from 'next/app';
import '../styles/globals.css';
import 'flowbite-react';
import { ThemeInit } from '../.flowbite-react/init';
import { ThemeProvider } from 'flowbite-react';
import TopNavBar from "../components/TopNavBar"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <ThemeInit />
      <TopNavBar />
            <Component {...pageProps} />
    </ThemeProvider>
  );
}
