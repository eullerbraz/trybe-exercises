const { describe, test, expect } = require('@jest/globals');
const { obj1, obj2, obj3 } = require('./exercise5.js');

describe('Teste Exercicios 5:', () => {
  test('Testando objetos', () => {
    expect(obj1).toEqual(obj2);
    expect(obj1).not.toEqual(obj3);
    expect(obj2).not.toEqual(obj3);
  })
})