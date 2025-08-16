import type { Config } from 'tailwindcss'
import flowbite from 'flowbite/plugin'

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    'node_modules/flowbite-react/lib/esm/**/*.js',
    './node_modules/flowbite/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        background: '#0B0F14',
        surface: '#12161D',
        primary: '#1E90FF',
        accent: '#FFD700',
        muted: '#9CA3AF',
      },
      fontFamily: { rajdhani: ['Rajdhani', 'sans-serif'] },
      borderRadius: { xl: '1rem', '2xl': '1.25rem' },
    },
  },
  plugins: [flowbite],
}
export default config
