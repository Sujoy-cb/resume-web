/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    fontFamily:{
      "Nunito": ['Nunito', 'sans-serif'],
      "josef": ['Josefin Sans', 'sans-serif']
    },
    colors:{
      "bcolor": '#071952',
      "fcolor": '#fff'
    },
    extend: {},
  },
  plugins: [],
}

