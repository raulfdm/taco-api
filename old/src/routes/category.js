const CategoryController = require('../controllers/CategoryController');
const { isValidId } = require('../helpers/id.helper');

const { API_ROUTE } = require('../config/api');

module.exports = app => {
  /**
   * @api {get} /category Request all available categories
   * @apiName GetCategoriesList
   * @apiGroup Category
   * @apiExample {curl} Example usage:
   *     curl -i http://localhost:4000/api/v1/category
   *
   * @apiSuccess {Object[]} category A list of all categories available.
   */
  app.get(`${API_ROUTE}/category`, (_, res) =>
    res.json(CategoryController.getCategoriesList())
  );

  /**
   * @api {get} /category/:categoryId Request a specific category
   * @apiName GetCategoryById
   * @apiGroup Category
   * @apiExample {curl} Example usage:
   *     curl -i http://localhost:4000/api/v1/category/1
   * @apiParam {Number} categoryId Category unique ID.
   *
   * @apiSuccess {Object}   category Category.
   * @apiSuccess {Number}   category.id Category unique ID.
   * @apiSuccess {String}   category.description Category description.
   */
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
