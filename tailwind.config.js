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
      "bcolor": '#502acd',
      "fcolor": '#fff',
      "textColor": "#444"
    },
    extend: {},
  },
  plugins: [],
}

