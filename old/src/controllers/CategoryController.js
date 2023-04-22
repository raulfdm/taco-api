const categories = require('../data/categoryList.json');

class CategoryController {
  static getCategoriesList() {
    return categories;
  }

  static getCategoryById(categoryId) {
    return categories.filter(
      category => category.id.toString() === categoryId.toString()
    );
  }
}

module.exports = CategoryController;
