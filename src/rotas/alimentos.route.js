const fs = require('fs');
const BufferHelper = require('../helpers/bufferHelper.js');

module.exports = app => {
  let alimentos;
  // Leitura do arquivo com os dados
  fs.readFile('src/data/alimentos.json', (err, data) => {
    if (err) throw new Error('Erro ao carregar a lista de alimentos');
    alimentos = data;
  });

  // Rota padrão
  app.get('/alimentos', (req, res) => {
    res.json(BufferHelper.toJson(alimentos));
  });

  // Rota por ID
  app.get('/alimentos/:id', (req, res) => {
    const array = BufferHelper.toJson(alimentos).filter(
      categoria => categoria._id === req.params.id
    );

    if (array.length !== 0) res.json(array);
    else res.status(404).json({ erro: 'Alimento não encontrado' });
  });
};
