const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: {
    enabled: true,
    content: [
      './dist/**/*.html',
      './dist/**/*.js',
    ]
  },
  darkMode: false,
  theme: {
    extend: {
      borderRadius: {
        large: '4.688rem'
      },
      colors: {
        primary: '#DC780B',
        primaryDark: '#c76c09',
        light: '#FBF1E7',
        black: 'black',
        secondary: '#150C01',
        dark: '#252525',
        white: 'white',
        gray: '#EDEDED',
        feature1: '#8FA632',
        feature2: '#E64D2E'
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
