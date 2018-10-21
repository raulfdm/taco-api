const { isArray, isEmpty } = require('lodash');

const CategoryController = require('../../controllers/CategoryController');

jest.mock(
  '../../data/categoryList.json',
  () => [
    { id: 1, category: 'Cereais e derivados' },
    { id: 2, category: 'Verduras, hortaliças e derivados' },
    { id: 3, category: 'Frutas e derivados' },
    { id: 4, category: 'Gorduras e óleos' },
  ],
  { virtual: true }
);

describe('fn: getCategoriesList', () => {
  const categoriesList = CategoryController.getCategoriesList();

  it('should return an array', () => {
    expect(isArray(categoriesList)).toBeTruthy();
  });

  it('should return a full list', () => {
    expect(categoriesList.length).toBe(4);
  });
});

describe('fn: getCategoryById', () => {
  it('should convert number to string', () => {
    const result = CategoryController.getCategoryById(1);

    expect(result[0]).toEqual({ id: 1, category: 'Cereais e derivados' });
  });

  describe('case: id#4', () => {
    const categoriesList = CategoryController.getCategoryById(4);
    it('should return an array', () => {
      expect(isArray(categoriesList)).toBeTruthy();
    });

    it('should return an array containing 1 element', () => {
      expect(categoriesList.length).toBe(1);
    });

    it('should return expected element', () => {
      expect(categoriesList[0]).toEqual({
        id: 4,
        category: 'Gorduras e óleos',
      });
    });
  });

  describe('case: id#2', () => {
    const categoriesList = CategoryController.getCategoryById(2);
    it('should return an array', () => {
      expect(isArray(categoriesList)).toBeTruthy();
    });

    it('should return an array containing 1 element', () => {
      expect(categoriesList.length).toBe(1);
    });

    it('should return expected element', () => {
      expect(categoriesList[0]).toEqual({
        id: 2,
        category: 'Verduras, hortaliças e derivados',
      });
    });
  });

  describe('case: unknown categoryId', () => {
    const categoriesList = CategoryController.getCategoryById(1000);
    it('should return an array', () => {
      expect(isArray(categoriesList)).toBeTruthy();
    });

    it('should return an empty array', () => {
      expect(isEmpty(categoriesList)).toBeTruthy();
    });
  });
});
