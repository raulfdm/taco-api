const FoodController = require('../controllers/FoodController');
const { isValidId } = require('../helpers/id.helper');

module.exports = app => {
  app.get('/food', (_, res) => res.json(FoodController.getFoodList()));

  app.get('/food/:foodId', (req, res) => {
    const { foodId } = req.params;

    if (!isValidId(foodId)) {
      res.status(400).json({
        message: 'Food id is required',
      });
    }

    res.json(FoodController.getFoodById(foodId));
  });

  app.get('/category/:categoryId/food', (req, res) => {
    const { categoryId } = req.params;

    if (!isValidId(categoryId)) {
      res.status(400).json({
        message: 'Invalid category id',
      });
    }

    res.json(FoodController.getFoodByCategoryId(categoryId));
  });
};
