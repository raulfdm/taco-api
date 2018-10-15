const express = require('express');
const consign = require('consign');

module.exports = function() {
  const app = express();

  consign({ cwd: 'src/' })
    .include('routes')
    .into(app);

  return app;
};
