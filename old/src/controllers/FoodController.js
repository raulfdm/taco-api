const foodList = require('../data/foodList.json');

class Food {
  static getFoodList() {
    return foodList;
  }

  static getFoodById(foodId) {
    return foodList.filter(food => food.id.toString() === foodId.toString());
  }

  static getFoodByCategoryId(categoryId) {
    const response = foodList.filter(
      food => food.category_id.toString() === categoryId.toString()
    );

    return response;
  }
}

module.exports = Food;
