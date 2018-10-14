import foodList from './data/foodList.json';

class TACO {
  getAllFood() {
    return foodList;
  }

  getFoodById(id) {
    return foodList.filter(food => food.id === id);
  }

  getFoodByCategoryId(categoryId) {
    return foodList.filter(food => food.category_id === categoryId);
  }

  getFoodByDescription(description) {
    return foodList.filter(food =>
      new RegExp(description, 'gi').test(food.description)
    );
  }
}

export default new TACO();
