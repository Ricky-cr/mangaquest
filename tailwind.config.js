const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
    './node_modules/flowbite-react/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        ...colors,
        'mq-blue': '#00B4FF',
        'mq-gold': '#FFD700',
        'mq-dark': '#0A0A0A',
      },
      fontFamily: {
        poppins: ['var(--font-poppins)', ...defaultTheme.fontFamily.sans],
        mplus: ['var(--font-mplus)', ...defaultTheme.fontFamily.sans],
        nunito: ['var(--font-nunito)', ...defaultTheme.fontFamily.sans],
        notojp: ['var(--font-notojp)', ...defaultTheme.fontFamily.sans],
      },
      screens: {
        xs: '400px',   // 👉 mobile molto piccolo
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
        '3xl': '1800px',  // 👉 desktop 2K
        '4xl': '2200px',  // 👉 ultra-wide
      },
    },
  },
  // plugins: [require('flowbite/plugin')],
  darkMode: 'media',
};
