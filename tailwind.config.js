module.exports = {
  enabled: process.env.NODE_ENV === 'production',
  purge: {
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js',
      // TypeScript
      'plugins/**/*.ts',
      'nuxt.config.ts'
    ]
  },
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
}
