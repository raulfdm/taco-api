const CategoryController = require('../controllers/CategoryController');
const { isValidId } = require('../helpers/id.helper');

module.exports = app => {
  app.get('/category', (_, res) =>
    res.json(CategoryController.getCategoriesList())
  );

  app.get('/category/:categoryId', (req, res) => {
    const { categoryId } = req.params;

    if (!isValidId(categoryId)) {
      res.status(400).json({
        message: 'Invalid Category ID',
      });
    }

    res.json(CategoryController.getCategoryById(categoryId));
  });
};
