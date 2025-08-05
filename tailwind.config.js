/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'mq-blue': '#00B4FF',
        'mq-gold': '#FFD700',
        'mq-dark': '#0A0A0A',
      },
      fontFamily: {
        poppins: ['var(--font-poppins)', 'sans-serif'],
        mplus: ['var(--font-mplus)', 'sans-serif'],
        nunito: ['var(--font-nunito)', 'sans-serif'],
        notojp: ['var(--font-notojp)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}