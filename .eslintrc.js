module.exports = {
  extends: ['airbnb-base', 'prettier'],
  rules: {
    'no-underscore-dangle': 0,
  },
  globals: {
    expect: true,
    jest: true,
    it: true,
    describe: true,
  },
};
