const { test, expect } = require('@jest/globals');
const object = require('./exercise4.js');
jest.mock('./exercise4.js');

test('Testes Exercicio 4', () => {
  object.first.mockImplementation((str) => str.toLowerCase());
  object.second.mockImplementation((str) => str[str.length - 1]);
  object.third.mockImplementation((str1, str2, str3) => `${str1}${str2}${str3}`);

  expect(object.first('JDJD')).toBe('jdjd');
  expect(object.second('JDJD')).toBe('D');
  expect(object.third('JDJD', ' aaa', ' bbb')).toBe('JDJD aaa bbb');
});