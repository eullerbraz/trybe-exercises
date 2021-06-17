const { test, expect } = require('@jest/globals');
const object = require('./exercise5.js');

describe("testando a requisição", () => {
  object.fetchDog = jest.fn();
  afterEach(object.fetchDog.mockReset);

  test("testando requisição caso a promisse resolva", async () => {
    object.fetchDog.mockResolvedValue("request sucess");

    object.fetchDog();
    expect(object.fetchDog).toHaveBeenCalled();
    expect(object.fetchDog).toHaveBeenCalledTimes(1);
    expect(object.fetchDog()).resolves.toBe("request sucess");
    expect(object.fetchDog).toHaveBeenCalledTimes(2);
  });

  test("testando requisição caso a promisse seja rejeitada", async () => {
    object.fetchDog.mockRejectedValue("request failed");

    expect(object.fetchDog).toHaveBeenCalledTimes(0);
    expect(object.fetchDog()).rejects.toMatch("request failed");
    expect(object.fetchDog).toHaveBeenCalledTimes(1);
  });
});