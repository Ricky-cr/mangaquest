import defaultTheme from 'tailwindcss/defaultTheme';
import colors from 'tailwindcss/colors';
import flowbiteReact from 'flowbite-react/plugin/tailwindcss';
import 'flowbite';

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    '.flowbite-react\\class-list.json',
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
        xs: '400px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
        '3xl': '1800px',
        '4xl': '2200px',
      },
    },
  },
  plugins: [flowbiteReact],
  darkMode: 'media',
};
