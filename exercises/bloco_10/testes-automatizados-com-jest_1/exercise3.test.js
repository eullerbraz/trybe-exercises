const myRemoveWithoutCopy = require('./exercise3.js')
const { describe, test, expect } = require("@jest/globals");

describe('Testes Exercicio 3:', () => {
  test('Teste de retornos', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  })
  test('Array não altera', () => {
    const array = [1, 2, 3, 4];
    myRemoveWithoutCopy(array, 2);
    expect(array).toEqual([1, 3, 4]);
  })
})