const { test, describe, expect } = require('@jest/globals');

const myRemove = require('./exercise2.js');

describe('Testes Exercicios 2: ', () => {
  test('Verificação das chamadas', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toContain(3);
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  })
  test('Array não altera', () => {
    const array = [1, 2, 3, 4];
    myRemove([1, 2, 3, 4]);
    expect(array).toEqual([1, 2, 3, 4]);
  })
})