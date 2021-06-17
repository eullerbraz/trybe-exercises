const { test, expect } = require('@jest/globals');
const object = require('./exercise2.js');

test('Teste exercicio 2', () => {
  object.randomNumber = jest.fn().mockImplementationOnce((a, b) => a / b);

  expect(object.randomNumber(6, 2)).toBe(3);
  expect(object.randomNumber).toHaveBeenCalledWith(6, 2);
  expect(object.randomNumber).toHaveBeenCalledTimes(1);
});