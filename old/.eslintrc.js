module.exports = {
  extends: ['eslint:recommended', 'airbnb-base', 'prettier'],
  rules: {
    'no-underscore-dangle': 'off',
    'import/no-unresolved': 'warn',
  },
  globals: {
    expect: true,
    jest: true,
    it: true,
    describe: true,
    isNaN: true,
  },
};
