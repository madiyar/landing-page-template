const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js',
  ],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        primary: '#DC780B',
        primaryDark: '#c76c09',
        light: '#FBF1E7',
        black: 'black',
        secondary: '#150C01',
        dark: '#252525',
        white: 'white',
        gray: '#EDEDED'
      },
      fontFamily: {
        sans: ['Roboto', ...defaultTheme.fontFamily.sans],
        serif: ['Philosopher', ...defaultTheme.fontFamily.serif]
      }
    },
    container: {
      padding: '2rem',
      center: true,
      screens: {
        xl: '1440px',
        "2xl": '1440px'
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
