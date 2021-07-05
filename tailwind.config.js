module.exports = {
  mode: 'jit',
  purge: {
    enabled: !!(process.env.NODE_ENV === 'production'),
    layers: ['base', 'components', 'utilities'],
    content: ['./src/**/*.html', './src/**/*.js',]
  },
  darkMode: false,
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
