const books = require('./books');
const assert = require('assert');

const expectedResult = 43;

function averageAge() {
  const sumAges = books.reduce((acc, book) => {
    const ageAuthorsReleaseBooks = book.releaseYear - book.author.birthYear;
    return acc + ageAuthorsReleaseBooks;
  }, 0) / books.length;
  return sumAges;
}

assert.strictEqual(averageAge(), expectedResult);
