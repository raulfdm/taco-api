const request = require('supertest');
const app = require('../../config/express')();

describe('GET /food', () => {
  const requestFood = request(app).get('/food');

  it('should return status code 200', () => requestFood.expect(200));

  it('should body be an array', () =>
    requestFood.then(request => expect(request.body).toBeInstanceOf(Array)));

  /* Fixed amount of element (597) */
  it('should body response have size of 597 ', () =>
    requestFood.then(request => expect(request.body).toHaveLength(597)));
});

describe('GET /food/:foodId', () => {
  const requestFood = request(app).get('/food/1');
  const requestFood2 = request(app).get('/food/56');

  it('should return status code 200', () => requestFood.expect(200));

  it('should return an array', () =>
    requestFood.then(request => expect(request.body).toBeInstanceOf(Array)));
  it('should array have length of 1', () =>
    requestFood.then(request => expect(request.body).toHaveLength(1)));

  it('should array have length of 1 (case 2)', () =>
    requestFood2.then(request => expect(request.body).toHaveLength(1)));

  describe('unknown ID', () => {
    const requestFood = request(app).get('/food/900');
    it('should return status code 200', () => requestFood.expect(200));

    it('should return an array', () =>
      requestFood.then(request => expect(request.body).toBeInstanceOf(Array)));

    it('should return an empty array when receives unknown ID', () => {
      requestFood.then(request => expect(request.body).toHaveLength(0));
    });
  });

  describe.only('validation', () => {
    const badRequest = request(app).get('/food/undefined');

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
