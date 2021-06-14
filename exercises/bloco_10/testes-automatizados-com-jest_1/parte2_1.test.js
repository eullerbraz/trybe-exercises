const { encode, decode } = require('./parte2_1.js');

const { describe, it, expect } = require('@jest/globals');

describe('Testes Funções Encode e Decode', () => {
  it('Teste de Tipagem', () => {
    expect(typeof encode).toBe('function');
    expect(typeof decode).toBe('function');
  })
  it('Teste de Chamada Encode', () => {
    expect(encode('a')).toBe('1');
    expect(encode('e')).toBe('2');
    expect(encode('i')).toBe('3');
    expect(encode('o')).toBe('4');
    expect(encode('u')).toBe('5');
  })
  it('Teste de Chamada Decode', () => {
    expect(decode('1')).toBe('a');
    expect(decode('2')).toBe('e');
    expect(decode('3')).toBe('i');
    expect(decode('4')).toBe('o');
    expect(decode('5')).toBe('u');
  })
  it('Teste Demais Casos', () => {
    expect(decode('g')).toBe('g');
    expect(encode('7')).toBe('7');
  })
  it('Teste Tamanho String', () => {
    expect(encode('trybe').length).toBe(5);
    expect(decode('tryber').length).toBe(6);
  })
})