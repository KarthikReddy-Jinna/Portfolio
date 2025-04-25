/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        blue: {
          50: '#F0F7FF',
          100: '#E6F0FE',
          200: '#BFD7ED',
          300: '#90C2F2',
          400: '#60A5F2',
          500: '#3B82F6',
        },
        pink: {
          50: '#FFF0F7',
          100: '#FFE6F0',
          200: '#FFC8DD',
          300: '#FFA8CA',
          400: '#FF7BA9',
          500: '#FF4D8F',
        },
        green: {
          50: '#F0FFF4',
          100: '#E6FFEA',
          200: '#C1E1C1',
          300: '#9ACA9A',
          400: '#60B160',
          500: '#38A169',
        },
        yellow: {
          50: '#FFFEF0',
          100: '#FFFCE6',
          200: '#FDFD96',
          300: '#FAEB71',
          400: '#F6E05E',
          500: '#ECC94B',
        },
      },
    },
  },
  plugins: [],
};