module.exports = {
  root: true,
  extends: '@react-native-community',
  plugins: ['prettier'],
  rules: {
    'id-length': [ 'error', { min: 1, max: 32 } ],
    '@typescript-eslint/no-unused-vars': 'off',
    'prettier/prettier': 'error',
    'react/no-unstable-nested-components': 'off',
    'react-native/no-inline-styles': 'off',
    'react-hooks/exhaustive-deps': 'off',
    'jest/no-disabled-tests': 'off',
    'dot-notation': 'off',
  },
};
