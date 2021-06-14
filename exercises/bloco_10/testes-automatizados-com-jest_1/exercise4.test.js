const { test, describe, expect } = require('@jest/globals');
const myFizzBuzz = require('./exercise4.js');

describe('Testes Exercicios 4:', () => {
  test('Teste de retornos', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
    expect(myFizzBuzz(9)).toBe('fizz');
    expect(myFizzBuzz(20)).toBe('buzz');
    expect(myFizzBuzz(19)).toBe(19);
    expect(myFizzBuzz('19')).toBe(false);
  })
})