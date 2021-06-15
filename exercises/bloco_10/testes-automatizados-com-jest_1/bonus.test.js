const { searchEmployee } = require('./bonus.js');
const { describe, test, expect } = require("@jest/globals");

describe('Testes Bônus:', () => {
  test('Teste de Tipagem', () => {
    expect(typeof searchEmployee).toBe('function');
})
  test('Teste de Retorno:', () => {
    expect(searchEmployee('4456-4', 'lastName')).toBe('Zuckerberg');
    expect(searchEmployee('4678-2', 'firstName')).toBe('Paul');
    expect(searchEmployee('1256-4', 'specialities')).toEqual(['Hooks', 'Context API', 'Tailwind CSS']);
  });
  test('Função sem parâmetro', () => {
    expect(() => searchEmployee()).toThrow();
  })
  test('Retorno id incorreto', () => {
    expect(() => searchEmployee('4678-9', 'firstName')).toThrowError('ID não identificada');
  })
  test('Retorno informação incorreta', () => {
    expect(() => searchEmployee('4678-2', 'teste')).toThrowError('Informação indisponível');
  })
});
