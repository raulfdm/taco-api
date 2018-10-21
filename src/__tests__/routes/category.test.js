const request = require('supertest');
const app = require('../../config/express')();

describe('GET /category', () => {
  const requestCategories = request(app).get('/category');

  it('should return status code 200', () => requestCategories.expect(200));

  it('should body be an array', () =>
    requestCategories.then(req => expect(req.body).toBeInstanceOf(Array)));

  /* Fixed amount of element (15) */
  it('should body response have size of 15 ', () =>
    requestCategories.then(req => expect(req.body).toHaveLength(15)));
});

describe('GET /category/:categoryId', () => {
  describe('happy path', () => {
    describe('case 1', () => {
      const requestCategory = request(app).get('/category/1');
      it('should return status code 200', () => requestCategory.expect(200));

      it('should return an array', () =>
        requestCategory.then(req => expect(req.body).toBeInstanceOf(Array)));
      it('should array have length of 1', () =>
        requestCategory.then(req => expect(req.body).toHaveLength(1)));

      it('should the id from the object be the same sent', () => {
        requestCategory.then(req => expect(req.body[0].id).toBe(1));
      });
    });

    describe('case 2', () => {
      const requestCategory = request(app).get('/category/14');
      it('should return status code 200', () => requestCategory.expect(200));

      it('should return an array', () =>
        requestCategory.then(req => expect(req.body).toBeInstanceOf(Array)));
      it('should array have length of 1', () =>
        requestCategory.then(req => expect(req.body).toHaveLength(1)));

      it('should the id from the object be the same sent', () => {
        requestCategory.then(req => expect(req.body[0].id).toBe(14));
      });
    });
  });

  describe('Unknown category ID', () => {
    const requestCategory = request(app).get('/category/900');
    it('should return status code 200', () => requestCategory.expect(200));

    it('should return an array', () =>
      requestCategory.then(req => expect(req.body).toBeInstanceOf(Array)));

    it('should return an empty array when receives unknown ID', () => {
      requestCategory.then(req => expect(req.body).toHaveLength(0));
    });
  });

  describe('validation', () => {
    const badRequest = request(app).get('/category/undefined');

    it('should return 400', () => badRequest.expect(400));

    it('should return an object', () =>
      badRequest.then(response =>
        expect(response.body).toBeInstanceOf(Object)
      ));

    it('should object contain a "message" props', () =>
      badRequest.then(response =>
        expect(response.body).toHaveProperty('message')
      ));

    it('should "message" match "invalid" word', () =>
      badRequest.then(response =>
        expect(response.body.message).toMatch(/invalid/gi)
      ));
  });
});
