const { isArray, isEmpty } = require('lodash');

const FoodController = require('../../controllers/FoodController');

jest.mock(
  '../../data/foodList.json',
  () => [
    {
      id: '1',
      description: 'Food 1',
      category_id: '4',
    },
    {
      id: '2',
      description: 'Food 2',
      category_id: '3',
    },
    {
      id: '3',
      description: 'Food 3',
      category_id: '2',
    },
    {
      id: '4',
      description: 'Food 4',
      category_id: '1',
    },
    {
      id: '44',
      description: 'Food 44',
      category_id: '111',
    },
  ],
  { virtual: true }
);

describe('fn: getFoodList', () => {
  const foodList = FoodController.getFoodList();

  it('should return an array', () => {
    expect(isArray(foodList)).toBeTruthy();
  });

  it('should return a full list', () => {
    expect(foodList.length).toBe(5);
  });
});

describe('fn: getFoodById', () => {
  it('should convert number to string', () => {
    const result = FoodController.getFoodById(1);
    expect(result[0]).toEqual({
      id: '1',
      description: 'Food 1',
      category_id: '4',
    });
  });

  describe('case: id#4', () => {
    const foodList = FoodController.getFoodById(4);
    it('should return an array', () => {
      expect(isArray(foodList)).toBeTruthy();
    });

    it('should return an array containing 1 element', () => {
      expect(foodList.length).toBe(1);
    });

    it('should return expected element', () => {
      expect(foodList[0]).toEqual({
        id: '4',
        description: 'Food 4',
        category_id: '1',
      });
    });
  });

  describe('case: id#2', () => {
    const foodList = FoodController.getFoodById(2);
    it('should return an array', () => {
      expect(isArray(foodList)).toBeTruthy();
    });

    it('should return an array containing 1 element', () => {
      expect(foodList.length).toBe(1);
    });

    it('should return expected element', () => {
      expect(foodList[0]).toEqual({
        id: '2',
        description: 'Food 2',
        category_id: '3',
      });
    });
  });

  describe('case: unknown foodId', () => {
    const foodList = FoodController.getFoodById(1000);
    it('should return an array', () => {
      expect(isArray(foodList)).toBeTruthy();
    });

    it('should return an empty array', () => {
      expect(isEmpty(foodList)).toBeTruthy();
    });
  });
});

describe('fn: getFoodByCategoryId', () => {
  it('should convert number to string', () => {
    const result = FoodController.getFoodByCategoryId(1);
    expect(result[0]).toEqual({
      id: '4',
      description: 'Food 4',
      category_id: '1',
    });
  });

  describe('case: id#3', () => {
    const result = FoodController.getFoodByCategoryId(2);

    it('should return an array', () => {
      expect(isArray(result)).toBeTruthy();
    });

    it('should return an array containing 1 element', () => {
      expect(result.length).toBe(1);
    });

    it('should the element match the expected', () => {
      expect(result[0]).toEqual({
        id: '3',
        description: 'Food 3',
        category_id: '2',
      });
    });
  });

  describe('case: id#111', () => {
    const result = FoodController.getFoodByCategoryId(111);

    it('should return an array', () => {
      expect(isArray(result)).toBeTruthy();
    });

    it('should return an array containing 1 element', () => {
      expect(result.length).toBe(1);
    });

    it('should the element match the expected', () => {
      expect(result[0]).toEqual({
        id: '44',
        description: 'Food 44',
        category_id: '111',
      });
    });
  });

  describe('case: unknown categoryId', () => {
    const foodList = FoodController.getFoodByCategoryId(1098983);
    it('should return an array', () => {
      expect(isArray(foodList)).toBeTruthy();
    });

    it('should return an empty array', () => {
      expect(isEmpty(foodList)).toBeTruthy();
    });
  });
});
