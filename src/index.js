const app = require('./config/express.config.js')();

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`Servidor Rodando na porta ${port}`));
