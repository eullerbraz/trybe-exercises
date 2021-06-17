const { test, expect } = require('@jest/globals');
const { randomNumber } = require('./exercise1.js');

test('Testar randomNumber', () => {
  const randomNumber = jest.fn().mockReturnValue(10);

  randomNumber();
  expect(randomNumber).toHaveBeenCalled();
  expect(randomNumber()).toBe(10);
  expect(randomNumber).toHaveBeenCalledTimes(2);
});