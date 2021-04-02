const { colors } = require('tailwindcss/defaultTheme')


module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      gray:colors.blueGray,
      teal:colors.teal,
      orange:colors.orange,
      white : colors.white
   },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
