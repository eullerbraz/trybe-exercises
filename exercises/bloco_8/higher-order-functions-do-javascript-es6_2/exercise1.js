const assert = require('assert');

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:
/* 
//Exercicio 1
function authorBornIn1947() {
  const bookWithauthorBornIn1947 = books.find((book) => book.author.birthYear === 1947);
  return bookWithauthorBornIn1947.author.name;
}

assert.strictEqual(authorBornIn1947(), 'Stephen King');

//Exercicio 2
function smallerName() {
  let nameBook;
  books.forEach((book) => {
    if (!nameBook || book.name.length < nameBook.length) {
      nameBook = book.name;
    }
  })
  return nameBook;
}

assert.strictEqual(smallerName(), 'Duna');

//Exercicio 3
const expectedResult3 = {
  author: {
    birthYear: 1948,
    name: 'George R. R. Martin',
  },
  genre: 'Fantasia',
  id: 1,
  name: 'As Crônicas de Gelo e Fogo',
  releaseYear: 1991,
};

function getNamedBook() {
  return books.find((book) => book.name.length === 26)
}

assert.deepStrictEqual(getNamedBook(), expectedResult3);

//Exercicio 4
const expectedResult4 = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: { name: 'George R. R. Martin', birthYear: 1948 },
    releaseYear: 1991,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: { name: 'Stephen King', birthYear: 1947 },
    releaseYear: 1986,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: { name: 'Frank Herbert', birthYear: 1920 },
    releaseYear: 1965,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: { name: 'Isaac Asimov', birthYear: 1920 },
    releaseYear: 1951,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: { name: 'H. P. Lovecraft', birthYear: 1890 },
    releaseYear: 1928,
  },
];

function booksOrderedByReleaseYearDesc() {
  return books.sort((bookA, bookB) => bookB.releaseYear - bookA.releaseYear);
}

assert.deepStrictEqual(booksOrderedByReleaseYearDesc(), expectedResult4);

//Exercicio 5
const expectedResult5 = false;

function everyoneWasBornOnSecXX() {
  return books.every((book) => {
    const authorYear = book.author.birthYear;
    return authorYear >= 1900 && authorYear < 2000;
  })
}

assert.strictEqual(everyoneWasBornOnSecXX(), expectedResult5);

//Exercicio 6
const expectedResult6 = true;

function someBookWasReleaseOnThe80s() {
  return books.some((book) => book.releaseYear < 1990 && book.releaseYear >= 1980);
}

assert.strictEqual(someBookWasReleaseOnThe80s(), expectedResult6);

//Exercicio 7 */
const expectedResult7 = false;

function authorUnique() {
  return !books.some((book) => {
    return books.some((bookSome) => {
      return (book.author.birthYear === bookSome.author.birthYear) && (book.author.name !== bookSome.author.name);
    })
  })
}

assert.strictEqual(authorUnique(), expectedResult7);