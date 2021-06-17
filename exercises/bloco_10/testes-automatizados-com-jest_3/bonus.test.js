const { test, expect } = require('@jest/globals');
const { fetchJoke } = require('./bonus.js');
const fetch = require('node-fetch');

jest.mock('node-fetch');

const fakeJokeObject = {
  'id': '7h3oGtrOfxc',
  'joke': 'Whiteboards ... are remarkable.',
  'status': 200
};

test('Testar chamada fetchJoke', () => {
  fetch.mockImplementation( async ()=> {
    return { json: () => {
      return fakeJokeObject;
    } }
  });

  expect(fetchJoke()).resolves.toBe('Whiteboards ... are remarkable.');
});