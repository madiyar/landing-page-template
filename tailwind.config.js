module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js',
  ],
  darkMode: false,
  theme: {
    extend: {},
    colors: {
      primary: '#DC780B',
      light: '#FBF1E7',
      black: 'black',
      secondary: '#150C01',
      dark: '#252525',
      white: 'white',
      gray: '#EDEDED'
    },
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
      title: ['Philosopher', 'sans-serif']
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
