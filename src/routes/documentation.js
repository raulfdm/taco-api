const { join } = require('path');

module.exports = app => {
  app.get('/docs', (_, res) =>
    res.sendFile(join(__dirname, '../../docs/index.html'))
  );
};
