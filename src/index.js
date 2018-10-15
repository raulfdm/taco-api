const app = require('./config/express.js')();

const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`Listening at ${port} port`));
