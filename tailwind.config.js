/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './composables/**/*.{js,ts}',
    './plugins/**/*.{js,ts}',
    './app.{js,ts,vue}'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#EBE6E1',
          200: '#D8CDC3',
          300: '#B19C87',
          400: '#B19C87',
          500: '#9E846A',
          600: '#7E6954',
          700: '#5E4F3F',
          800: '#3F342A',
          900: '#1F1A15'
        },
        danger: '#BD5549',
        secondary: '#17396E'
      }
    },
    container: {
      center: true, // 水平置中
      padding: '1rem' // 水平間距
    }
  },
  plugins: []
};
