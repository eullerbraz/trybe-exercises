const { test, expect } = require("@jest/globals");
const uppercase = require('./exercise1.js');

test('Teste função callback de Uppercase', (done) => {
  uppercase('tomate', (str) => {
    expect(str).toBe('TOMATE');
    done();
  });
});
