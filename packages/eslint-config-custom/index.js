module.exports = {
  extends: ['turbo', 'prettier'],
  rules: {
    '@next/next/no-html-link-for-pages': 'off',
    'quotes': ['error', 'single'],
    'comma-dangle': ['error', 'never'],
    'semi': ['error', 'never']
  }
}
