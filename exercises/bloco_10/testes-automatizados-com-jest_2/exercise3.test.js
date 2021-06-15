const { test, expect } = require('@jest/globals');
const getUserName = require('./exercise2e3.js');

//Com Async/Await
test('Testar com id correto', async () => {
  expect.assertions(1);
  const name = await getUserName(4);
  expect(name).toBe('Mark');
});

test('Testar com id incorreto', async () => {
  expect.assertions(1);
  try {
    await getUserName(6);
  } catch (error) {
    expect(error).toEqual({ error: 'User with 6 not found.' });
  }
});