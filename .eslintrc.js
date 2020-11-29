module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      legacyDecorators: true,
    }
  },
  rules: {
    'react/prop-types': 'off',
    'react/display-name': 'off',
  }
};
