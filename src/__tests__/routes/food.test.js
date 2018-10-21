const request = require('supertest');
const app = require('../../config/express')();

const PATHS = {
  api: '/api/v1',
  get all() {
    return `${this.api}/food`;
  },
  byId(id) {
    return `${this.api}/food/${id}`;
  },
  byCategory(categoryId) {
    return `${this.api}/category/${categoryId}/food`;
  },
};

describe('GET /food', () => {
  const requestFood = request(app).get(PATHS.all);

  it('should return status code 200', () => requestFood.expect(200));

  it('should body be an array', () =>
    requestFood.then(req => expect(req.body).toBeInstanceOf(Array)));

  /* Fixed amount of element (597) */
  it('should body response have size of 597 ', () =>
    requestFood.then(req => expect(req.body).toHaveLength(597)));
});

describe('GET /food/:foodId', () => {
  describe('happy path', () => {
    describe('case 1', () => {
      const requestFood = request(app).get(PATHS.byId(1));
      it('should return status code 200', () => requestFood.expect(200));

      it('should return an array', () =>
        requestFood.then(req => expect(req.body).toBeInstanceOf(Array)));
      it('should array have length of 1', () =>
        requestFood.then(req => expect(req.body).toHaveLength(1)));

      it('should id from the object be the same sent', () => {
        requestFood.then(req => expect(req.body[0].id).toBe(1));
      });
    });

    describe('case 1', () => {
      const requestFood = request(app).get(PATHS.byId(56));
      it('should return status code 200', () => requestFood.expect(200));

      it('should return an array', () =>
        requestFood.then(req => expect(req.body).toBeInstanceOf(Array)));
      it('should array have length of 1', () =>
        requestFood.then(req => expect(req.body).toHaveLength(1)));
    });
  });

  describe('unknown ID', () => {
    const requestFood = request(app).get(PATHS.byId(900));
    it('should return status code 200', () => requestFood.expect(200));

    it('should return an array', () =>
      requestFood.then(req => expect(req.body).toBeInstanceOf(Array)));

    it('should return an empty array when receives unknown ID', () => {
      requestFood.then(req => expect(req.body).toHaveLength(0));
    });
  });

  describe('validation', () => {
    const badRequest = request(app).get(PATHS.byId('undefined'));

    it('should return 400', () => badRequest.expect(400));

    it('should return an object', () =>
      badRequest.then(response =>
        expect(response.body).toBeInstanceOf(Object)
      ));

    it('should object contain a "message" props', () =>
      badRequest.then(response =>
        expect(response.body).toHaveProperty('message')
      ));

    it('should "message" match "required" word', () =>
      badRequest.then(response =>
        expect(response.body.message).toMatch(/id|required/gi)
      ));
  });
});

describe('GET /category/:categoryId/food', () => {
  describe('happy path', () => {
    const requestFoodByCategory = request(app).get(PATHS.byCategory(1));

    it('should status be 200', () => requestFoodByCategory.expect(200));

    it('should return an array', () =>
      requestFoodByCategory.then(response =>
        expect(response.body).toBeInstanceOf(Array)
      ));

    /* Qty of elements by category 1 */
    it('should return an array length of 63', () =>
      requestFoodByCategory.then(response =>
        expect(response.body).toHaveLength(63)
      ));
  });

  describe('Unknown category id', () => {
    const requestFoodByCategory = request(app).get(PATHS.byCategory(999));
    it('should status be 200', () => requestFoodByCategory.expect(200));

    it('should return an array', () =>
      requestFoodByCategory.then(req =>
        expect(req.body).toBeInstanceOf(Array)
      ));

    it('should return an empty array when receives unknown ID', () => {
      requestFoodByCategory.then(req => expect(req.body).toHaveLength(0));
    });
  });

  describe('Valid "categoryId"', () => {
    const requestFoodByCategory = request(app).get(PATHS.byId(null));

    it('should status be 400', () => requestFoodByCategory.expect(400));

    it('should return an object', () =>
      requestFoodByCategory.then(response =>
        expect(response.body).toBeInstanceOf(Object)
      ));

    it('should object contain a "message" props', () =>
      requestFoodByCategory.then(response =>
        expect(response.body).toHaveProperty('message')
      ));

    it('should "message" match "required" word', () =>
      requestFoodByCategory.then(response =>
        expect(response.body.message).toMatch(/invalid/gi)
      ));
  });
});
