import type { Config } from 'tailwindcss'
import flowbiteReact from "flowbite-react/plugin/tailwindcss";

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    ".flowbite-react/class-list.json"
  ],
  theme: {
    extend: {
      colors: {
        background: '#0B0F14', // sfondo scuro principale
        surface: '#12161D',    // superfici secondarie
        primary: '#1E90FF',    // blu elettrico
        accent: '#FFD700',     // oro
        muted: '#9CA3AF',      // grigio testo secondario
      },
      fontFamily: {
        rajdhani: ['Rajdhani', 'sans-serif'],
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.25rem',
      },
    },
  },
  plugins: [flowbiteReact],
}
export default config