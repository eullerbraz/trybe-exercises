const sum = require('./exercise1.js')
const { describe, test, expect } = require("@jest/globals");

describe('Exercicio 1 Testes:', () => {
  test('Testa os retornos da função', () => {
    expect(sum(4, 5)).toBe(9);
    expect(sum(0, 0)).toBe(0);
  })
  test('Testa se a função retorna erro ao passar string', () => {
    expect(() => sum(4, '5')).toThrow();
    expect(() => sum(4 , '5')).toThrowError(new Error('parameters must be numbers'));
  })
})