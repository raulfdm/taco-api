const fs = require('fs');
const BufferHelper = require('../helpers/bufferHelper.js');

module.exports = app => {
  let categorias;
  // Leitura do arquivo com os dados
  fs.readFile('src/data/categorias.json', (err, data) => {
    if (err) throw new Error('Erro ao carregar as categorias');
    categorias = data;
  });

  // Rota padrão
  app.get('/categorias', (req, res) => {
    res.json(BufferHelper.toJson(categorias));
  });

  // Rota por ID
  app.get('/categorias/:id', (req, res) => {
    const array = BufferHelper.toJson(categorias).filter(
      categoria => categoria._id === req.params.id
    );

    if (array.length !== 0) res.json(array);
    else res.status(404).json({ erro: 'Dado Não Encontrado' });
  });
};
