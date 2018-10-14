const express = require('express');
const consign = require('consign');

module.exports = function() {
  const app = express();

  consign({ cwd: 'src/' })
    .include('rotas')
    .into(app);

  return app;
};
