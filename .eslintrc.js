module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-native/all',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended'
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['react', 'react-native', '@typescript-eslint'],
  env: {
    node: true,
    es2021: true,
    browser: true
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  rules: {}
};
