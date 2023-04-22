const { isValidId } = require('../../helpers/id.helper');

it('should return false if isnt a valid id', () => {
  expect(isValidId('testing')).toBeFalsy();
  expect(isValidId(undefined)).toBeFalsy();
  expect(isValidId(null)).toBeFalsy();
  expect(isValidId(() => {})).toBeFalsy();
  expect(isValidId({})).toBeFalsy();
});

it('should return "true" if it\'s a valid id', () => {
  expect(isValidId('123')).toBeTruthy();
  expect(isValidId(123)).toBeTruthy();
  expect(isValidId(0)).toBeTruthy();
});
