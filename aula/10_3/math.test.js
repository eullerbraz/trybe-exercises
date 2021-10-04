const { describe, test } = require('@jest/globals');
const math = require('./math.js');

describe('Testando mocks', () => {
  test('Testar que subtrair está sendo chamada', () => {
    math.subtrair = jest.fn();
    math.subtrair();
    expect(math.subtrair).toHaveBeenCalled();
  });
  
  test('Testar que multiplicar está sendo chamada e implementação', () => {
    math.multiplicar = jest.fn().mockReturnValue(10);
    math.multiplicar();
    expect(math.multiplicar).toHaveBeenCalled();
    expect(math.multiplicar).toHaveBeenCalledTimes(1);
    expect(math.multiplicar()).toBe(10);
    expect(math.multiplicar).toHaveBeenCalledTimes(2);
  });

  test('Testar que somar está sendo chamada e implementação', () => {
    const mockSomar = jest.spyOn(math, "somar");
    mockSomar.mockResolvedValue(5);
    mockSomar(2, 3);
    expect(mockSomar).toHaveBeenCalled();
    expect(mockSomar).toHaveBeenCalledTimes(1);
    expect(mockSomar).toHaveBeenCalledWith(2, 3);
    expect(mockSomar(2, 3)).resolves.toBe(5);
  });

  
  test('Testar que dividir está sendo chamada e implementação', () => {
    const mockDividir = jest.spyOn(math, "dividir");
    mockDividir.mockReturnValue(15);
    mockDividir.mockReturnValueOnce(2);
    mockDividir.mockReturnValueOnce(5);
  
    expect(mockDividir(4, 2)).toBe(2);
    expect(mockDividir).toHaveBeenCalled();
    expect(mockDividir).toHaveBeenCalledTimes(1);
    expect(mockDividir).toHaveBeenCalledWith(4, 2);
  
    expect(mockDividir(10, 2)).toBe(5);
    expect(mockDividir).toHaveBeenCalled();
    expect(mockDividir).toHaveBeenCalledTimes(2);
    expect(mockDividir).toHaveBeenCalledWith(10, 2);
  
    expect(mockDividir(30, 2)).toBe(15);
    expect(mockDividir).toHaveBeenCalled();
    expect(mockDividir).toHaveBeenCalledTimes(3);
    expect(mockDividir).toHaveBeenCalledWith(30, 2);
  });

  test('Testar que subtrair está sendo chamada e implementações', () => {
    const mockSubtrair = jest.spyOn(math, "subtrair");
    mockSubtrair.mockRestore();
    mockSubtrair.mockImplementation((a, b) => a * b);
    mockSubtrair.mockReturnValue(20);
  
    expect(mockSubtrair(10, 2)).toBe(20);
    expect(mockSubtrair).toHaveBeenCalled();
    expect(mockSubtrair).toHaveBeenCalledTimes(1);
    expect(mockSubtrair).toHaveBeenCalledWith(10, 2);
  
    mockSubtrair.mockRestore();
    mockSubtrair.mockReturnValue(8);
  
    expect(mockSubtrair(10, 2)).toBe(8);
    expect(mockSubtrair).toHaveBeenCalled();
    expect(mockSubtrair).toHaveBeenCalledTimes(1);
    expect(mockSubtrair).toHaveBeenCalledWith(10, 2);
  });
});