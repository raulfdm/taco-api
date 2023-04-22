const FoodController = require('../controllers/FoodController');
const { isValidId } = require('../helpers/id.helper');
const { API_ROUTE } = require('../config/api');

module.exports = app => {
  /**
   * @api {get} /food Request all available food
   * @apiName GetFoodList
   * @apiGroup Food
   * @apiExample {curl} Example usage:
   *     curl -i http://localhost:4000/api/v1/food
   * 
   * @apiSuccess {Object[]} food A list of all food available.  
   * 
 
   */
  app.get(`${API_ROUTE}/food`, (_, res) =>
    res.json(FoodController.getFoodList())
  );

  /**
   * @api {get} /food/:foodId Request a specific food
   * @apiName GetFoodById
   * @apiGroup Food
   * @apiExample {curl} Example usage:
   *     curl -i http://localhost:4000/api/v1/food/1/
   * @apiParam {Number} foodId Food unique ID.
   *
   * @apiSuccess {Number}   food.id Food unique ID.
   * @apiSuccess {String}   food.description Food description
   * @apiSuccess {String}   food.base_qty
   * @apiSuccess {Number}   food.base_unit
   * @apiSuccess {String}   food.category_id Category which the food bellow
   * @apiSuccess {Object}   food.attributes Nutrients
   *
   * @apiSuccess {Object}   food.attributes.energy energy
   * @apiSuccess {Number}   food.attributes.energy.kcal Quantity in kcal
   * @apiSuccess {Number}   food.attributes.energy.kj Quantity in kj
   *
   * @apiSuccess {Object}   food.attributes.ashes Ashes quantity (qty) and Unit (unit)
   * @apiSuccess {Object}   food.attributes.calcium Calcium quantity (qty) and Unit (unit)
   * @apiSuccess {Object}   food.attributes.carbohydrate Carbohydrate quantity (qty) and Unit (unit)
   * @apiSuccess {Object}   food.attributes.cholesterol Cholesterol quantity (qty) and Unit (unit)
   * @apiSuccess {Object}   food.attributes.copper Copper quantity (qty) and Unit (unit)
   * @apiSuccess {Object}   food.attributes.fiber Fiber quantity (qty) and Unit (unit)
   * @apiSuccess {Object}   food.attributes.humidity Humidity quantity (qty) and Unit (unit)
   * @apiSuccess {Object}   food.attributes.lipid Lipid quantity (qty) and Unit (unit)
   * @apiSuccess {Object}   food.attributes.magnesium Magnesium quantity (qty) and Unit (unit)
   * @apiSuccess {Object}   food.attributes.manganese Manganese quantity (qty) and Unit (unit)
   * @apiSuccess {Object}   food.attributes.niacin Niacin quantity (qty) and Unit (unit)
   * @apiSuccess {Object}   food.attributes.phosphorus Iron quantity (qty) and Unit (unit)
   * @apiSuccess {Object}   food.attributes.phosphorus Phosphorus quantity (qty) and Unit (unit)
   * @apiSuccess {Object}   food.attributes.potassium Potassium quantity (qty) and Unit (unit)
   * @apiSuccess {Object}   food.attributes.protein Protein quantity (qty) and Unit (unit)
   * @apiSuccess {Object}   food.attributes.pyridoxine Pyridoxine quantity (qty) and Unit (unit)
   * @apiSuccess {Object}   food.attributes.retinol Retinol quantity (qty) and Unit (unit)
   * @apiSuccess {Object}   food.attributes.riboflavin Riboflavin quantity (qty) and Unit (unit)
   * @apiSuccess {Object}   food.attributes.sodium Sodium quantity (qty) and Unit (unit)
   * @apiSuccess {Object}   food.attributes.thiamine Thiamine quantity (qty) and Unit (unit)
   * @apiSuccess {Object}   food.attributes.vitaminC Vitamin C quantity (qty) and Unit (unit)
   * @apiSuccess {Object}   food.attributes.zinc Zinc quantity (qty) and Unit (unit)
   *
   * @apiSuccess {Object}   food.attributes.amino_acids Amino Acids available
   * @apiSuccess {Object}   food.attributes.amino_acids.alanine alanine quantity (qty) and unit (unit)
   * @apiSuccess {Object}   food.attributes.amino_acids.arginine arginine quantity (qty) and unit (unit)
   * @apiSuccess {Object}   food.attributes.amino_acids.aspartic aspartic quantity (qty) and unit (unit)
   * @apiSuccess {Object}   food.attributes.amino_acids.cystine cystine quantity (qty) and unit (unit)
   * @apiSuccess {Object}   food.attributes.amino_acids.glutamic glutamic quantity (qty) and unit (unit)
   * @apiSuccess {Object}   food.attributes.amino_acids.glycine glycine quantity (qty) and unit (unit)
   * @apiSuccess {Object}   food.attributes.amino_acids.histidine histidine quantity (qty) and unit (unit)
   * @apiSuccess {Object}   food.attributes.amino_acids.isoleucine isoleucine quantity (qty) and unit (unit)
   * @apiSuccess {Object}   food.attributes.amino_acids.leucine leucine quantity (qty) and unit (unit)
   * @apiSuccess {Object}   food.attributes.amino_acids.lysine lysine quantity (qty) and unit (unit)
   * @apiSuccess {Object}   food.attributes.amino_acids.methionine methionine quantity (qty) and unit (unit)
   * @apiSuccess {Object}   food.attributes.amino_acids.phenylalanine phenylalanine quantity (qty) and unit (unit)
   * @apiSuccess {Object}   food.attributes.amino_acids.proline proline quantity (qty) and unit (unit)
   * @apiSuccess {Object}   food.attributes.amino_acids.serine serine quantity (qty) and unit (unit)
   * @apiSuccess {Object}   food.attributes.amino_acids.threonine threonine quantity (qty) and unit (unit)
   * @apiSuccess {Object}   food.attributes.amino_acids.tryptophan tryptophan quantity (qty) and unit (unit)
   * @apiSuccess {Object}   food.attributes.amino_acids.tyrosine tyrosine quantity (qty) and unit (unit)
   * @apiSuccess {Object}   food.attributes.amino_acids.valine valine quantity (qty) and unit (unit)
   *
   * @apiSuccess {Object}   food.attributes.fatty_acids Fatty Acids available
   * @apiSuccess {Object}   food.attributes.fatty_acids.saturated saturated quantity (qty) and unit (unit)
   * @apiSuccess {Object}   food.attributes.fatty_acids.monounsaturated monounsaturated quantity (qty) and unit (unit)
   * @apiSuccess {Object}   food.attributes.fatty_acids.polyunsaturated polyunsaturated quantity (qty) and unit (unit)
   * @apiSuccess {Object}   food.attributes.fatty_acids.12:0 12:0 quantity (qty) and unit (unit)
   * @apiSuccess {Object}   food.attributes.fatty_acids.14:0 14:0 quantity (qty) and unit (unit)
   * @apiSuccess {Object}   food.attributes.fatty_acids.16:0 16:0 quantity (qty) and unit (unit)
   * @apiSuccess {Object}   food.attributes.fatty_acids.18:0 18:0 quantity (qty) and unit (unit)
   * @apiSuccess {Object}   food.attributes.fatty_acids.20:0 20:0 quantity (qty) and unit (unit)
   * @apiSuccess {Object}   food.attributes.fatty_acids.22:0 22:0 quantity (qty) and unit (unit)
   * @apiSuccess {Object}   food.attributes.fatty_acids.24:0 24:0 quantity (qty) and unit (unit)
   * @apiSuccess {Object}   food.attributes.fatty_acids.16:1 16:1 quantity (qty) and unit (unit)
   * @apiSuccess {Object}   food.attributes.fatty_acids.18:1 18:1 quantity (qty) and unit (unit)
   * @apiSuccess {Object}   food.attributes.fatty_acids.20:1 20:1 quantity (qty) and unit (unit)
   * @apiSuccess {Object}   food.attributes.fatty_acids.18:2 n-6 18:2 n-6 quantity (qty) and unit (unit)
   * @apiSuccess {Object}   food.attributes.fatty_acids.18:3 n-3 18:3 n-3 quantity (qty) and unit (unit)
   * @apiSuccess {Object}   food.attributes.fatty_acids.18:1t 18:1t quantity (qty) and unit (unit)
   * @apiSuccess {Object}   food.attributes.fatty_acids.18:2t 18:2t quantity (qty) and unit (unit)
   */

  app.get(`${API_ROUTE}/food/:foodId`, (req, res) => {
    const { foodId } = req.params;

    if (!isValidId(foodId)) {
      res.status(400).json({
        message: 'Invalid Food ID',
      });
    }

    res.json(FoodController.getFoodById(foodId));
  });

  /**
   * @api {get} /category/:categoryId/food Request all food from a specific category
   * @apiName GetFoodListByCategory
   * @apiGroup Food
   * @apiExample {curl} Example usage:
   *     curl -i http://localhost:4000/api/v1/category/1/food
   * @apiParam {Number} categoryId Category unique ID.
   *
   */
  app.get(`${API_ROUTE}/category/:categoryId/food`, (req, res) => {
    const { categoryId } = req.params;

    if (!isValidId(categoryId)) {
      res.status(400).json({
        message: 'Invalid category id',
      });
    }

    res.json(FoodController.getFoodByCategoryId(categoryId));
  });
};
