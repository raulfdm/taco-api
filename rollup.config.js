const jsonPlugin = require('rollup-plugin-json');

module.exports = {
  input: 'src/index.js',
  output: {
    file: 'dist/taco.js',
    format: 'umd',
    name: 'TACO',
  },
  plugins: [jsonPlugin()],
};
