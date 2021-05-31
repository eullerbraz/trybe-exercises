const books = require('./books');
const assert = require('assert');

const expectedResult = "George R. R. Martin, J. R. R. Tolkien, Isaac Asimov, Frank Herbert, Stephen King, H. P. Lovecraft.";

function reduceNames() {
  return books.reduce((acc, book, index, array) => {
    if (index === 0) return book.author.name;
    if (index === array.length -1) return `${acc}, ${book.author.name}.`;
    return `${acc}, ${book.author.name}`;
  }, '');
}

assert.strictEqual(reduceNames(), expectedResult);