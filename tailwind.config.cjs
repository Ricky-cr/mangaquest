const defaultTheme   = require('tailwindcss/defaultTheme');
const twAllColors    = require('tailwindcss/colors');
const flowbitePlugin = require('flowbite-react/plugin/tailwindcss');

const { lightBlue, ...colors } = twAllColors;     // via l’alias deprecato

module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
    '.flowbite-react/class-list.json',
  ],
  theme: {
    extend: {
      colors: {
        ...colors,                 // palette base
        'mq-blue'  : '#00B4FF',
        'mq-gold'  : '#FFD700',
        'mq-dark'  : '#0A0A0A',
        'mq-purple': '#4F2DFE',
      },
      fontFamily: {
        poppins: ['var(--font-poppins)', ...defaultTheme.fontFamily.sans],
        mplus  : ['var(--font-mplus)',   ...defaultTheme.fontFamily.sans],
        nunito : ['var(--font-nunito)',  ...defaultTheme.fontFamily.sans],
        notojp : ['var(--font-notojp)',  ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [flowbitePlugin],
};
