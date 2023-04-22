const { join } = require('path');

module.exports = app => {
  app.get('/', (_, res) =>
    res.sendFile(join(__dirname, '../../docs/index.html'))
  );
};
