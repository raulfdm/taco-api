const app = require('./config/express.js')();

const port = process.env.PORT || 4000;

/* eslint-disable-next-line */
app.listen(port, () => console.log(`Listening at http://localhost:${port}`));
