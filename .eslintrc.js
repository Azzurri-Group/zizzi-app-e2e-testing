/** @type {import('@types/eslint').Linter.Config} */
module.exports = {
  env: {
    browser: false,
    'cypress/globals': false,
  },
  extends: [
    '@azzurri-group/eslint-config-pat-recommended',
    'airbnb-typescript/base',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: './tsconfig.json',
    ecmaFeatures: {
      jsx: false,
    },
  },
  reportUnusedDisableDirectives: true,
};
