const express = require('express');
const consign = require('consign');

module.exports = function app() {
  const expressApp = express();

  consign({ cwd: 'src/' })
    .include('routes')
    .into(expressApp);

  return expressApp;
};
