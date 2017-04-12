const app = require('./config/express.config.js')();

let port = process.env.PORT || 8080;


app.listen(port, () => {
    console.log('Servidor Rodando na porta ' + port);
});