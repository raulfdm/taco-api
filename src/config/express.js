const express = require('express');
const consign = require('consign');
const { join } = require('path');

module.exports = function app() {
  const expressApp = express();

  consign({ cwd: 'src/' })
    .include('routes')
    .into(expressApp);

  expressApp.use(express.static(join(__dirname, '../../docs/')));

  return expressApp;
};
