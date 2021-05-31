const books = require('./books');
const assert = require('assert');

const expectedResult = 'O Senhor dos Anéis';

function longestNamedBook() {
  const bigBook = books.reduce((biggestBook, currentBook) => {
    return biggestBook.name > currentBook.name ? biggestBook : currentBook;
  })
  return bigBook.name;
}

assert.deepStrictEqual(longestNamedBook(), expectedResult);
