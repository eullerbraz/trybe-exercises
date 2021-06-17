const { test, expect } = require('@jest/globals');
const object = require('./exercise3.js');

test('Teste exercicio 3', () => {
  object.randomNumber = jest.fn().mockImplementation((a, b, c) => a * b * c);
  
  expect(object.randomNumber(4, 5, 6)).toBe(120);
  expect(object.randomNumber).toHaveBeenCalled();
  expect(object.randomNumber).toHaveBeenCalledTimes(1);
  expect(object.randomNumber).toHaveBeenCalledWith(4, 5, 6);

  object.randomNumber.mockReset();
  object.randomNumber = jest.fn().mockImplementation((a) => 2 *a);

  expect(object.randomNumber).toHaveBeenCalledTimes(0);
  expect(object.randomNumber(7)).toBe(14);
  expect(object.randomNumber).toHaveBeenCalled();
  expect(object.randomNumber).toHaveBeenCalledTimes(1);
  expect(object.randomNumber).toHaveBeenCalledWith(7);
});