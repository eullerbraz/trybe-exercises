const { test, expect } = require('@jest/globals');
const object = require('./exercise5.js');

test('Testes Exercicio 4', () => {
  const mockfirst = jest.spyOn(object, 'first').mockImplementation((str) => str.toLowerCase());

  expect(mockfirst('AAA')).toBe('aaa');

  object.first.mockRestore();

  expect(object.first('aaa')).toBe('AAA');
});