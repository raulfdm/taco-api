const CategoryController = require('../controllers/CategoryController');
const { isValidId } = require('../helpers/id.helper');

const { API_ROUTE } = require('../config/api');

module.exports = app => {
  app.get(`${API_ROUTE}/category`, (_, res) =>
    res.json(CategoryController.getCategoriesList())
  );

  app.get(`${API_ROUTE}/category/:categoryId`, (req, res) => {
    const { categoryId } = req.params;

    if (!isValidId(categoryId)) {
      res.status(400).json({
        message: 'Invalid Category ID',
      });
    }

    res.json(CategoryController.getCategoryById(categoryId));
  });
};
