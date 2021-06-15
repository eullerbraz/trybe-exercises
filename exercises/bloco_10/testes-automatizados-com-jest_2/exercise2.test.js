const { test, expect } = require('@jest/globals');
const getUserName = require('./exercise2e3.js');

//Com Promise
test('Testar com id correto', () => {
  expect.assertions(1);
  return getUserName(4).then((name) => {
    expect(name).toBe('Mark');
  });
});

test('Testar com id incorreto', () => {
  expect.assertions(1);
  return getUserName(6).catch((error) => {
    expect(error).toEqual({ error: 'User with 6 not found.' });
  });
});