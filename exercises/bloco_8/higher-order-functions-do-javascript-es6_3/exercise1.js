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

//Exercicio 1
const expectedResult1 = [
    'As Crônicas de Gelo e Fogo - Fantasia - George R. R. Martin',
    'O Senhor dos Anéis - Fantasia - J. R. R. Tolkien',
    'Fundação - Ficção Científica - Isaac Asimov',
    'Duna - Ficção Científica - Frank Herbert',
    'A Coisa - Terror - Stephen King',
    'O Chamado de Cthulhu - Terror - H. P. Lovecraft',
  ];
  
  function formatedBookNames() {
    return books.map((book) => `${book.name} - ${book.genre} - ${book.author.name}`);
  }
  
  assert.deepStrictEqual(formatedBookNames(), expectedResult1);

//Exercicio 2
const expectedResult2 = [
    {
      age: 31,
      author: 'Isaac Asimov',
    },
    {
      age: 38,
      author: 'H. P. Lovecraft',
    },
    {
      age: 39,
      author: 'Stephen King',
    },
    {
      age: 43,
      author: 'George R. R. Martin',
    },
    {
      age: 45,
      author: 'Frank Herbert',
    },
    {
      age: 62,
      author: 'J. R. R. Tolkien',
    },
  ];
  
  function nameAndAge() {
    const arraysBook = books.map((book) => {
        const bookYear = book.releaseYear;
        const authorBirth = book.author.birthYear;
        const author = book.author.name;
        return {age: bookYear - authorBirth, author: author}
    })
    return arraysBook.sort((objecA, objectB) => objecA .age- objectB.age);
  }
  
  assert.deepStrictEqual(nameAndAge(), expectedResult2);

//Exercicio 3
const expectedResult3 = [
  { 
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: { name: 'George R. R. Martin', birthYear: 1948 },
    releaseYear: 1991
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
    releaseYear: 1954
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: { name: 'Isaac Asimov', birthYear: 1920 },
    releaseYear: 1951
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: { name: 'Frank Herbert', birthYear: 1920 },
    releaseYear: 1965
  }
];

function fantasyOrScienceFiction() {
  return books.filter((book) => book.genre === 'Ficção Científica' || book.genre === 'Fantasia');
}

assert.deepStrictEqual(fantasyOrScienceFiction(), expectedResult3);

//Exercicio 4
const expectedResult4 = [
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: { name: 'H. P. Lovecraft', birthYear: 1890 },
    releaseYear: 1928,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: { name: 'Isaac Asimov', birthYear: 1920 },
    releaseYear: 1951,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
    releaseYear: 1954,
  },
];

function oldBooksOrdered() {
  const booksOld = books.filter((book) => {
    const actualYear = 2021;
    const bookAge = actualYear - book.releaseYear;
    return bookAge > 60;
  })
  return booksOld.sort((bookA, bookB) => bookA.releaseYear - bookB.releaseYear);
}

assert.deepStrictEqual(oldBooksOrdered(), expectedResult4);

//Exercicio 5
const expectedResult5 = [
  'Frank Herbert',
  'George R. R. Martin',
  'Isaac Asimov',
  'J. R. R. Tolkien',
];

function fantasyOrScienceFictionAuthors() {
  const booksFicAndFan = books.filter((book) => book.genre === 'Ficção Científica' || book.genre === 'Fantasia');
  return booksFicAndFan.map((book) => book.author.name).sort();
}

assert.deepStrictEqual(fantasyOrScienceFictionAuthors(), expectedResult5);

//Exercicio 6
const expectedResult6 = [
  'O Senhor dos Anéis',
  'Fundação',
  'O Chamado de Cthulhu',
];

function oldBooks() {
  const booksOld = books.filter((book) => {
    const actualYear = 2021;
    const bookAge = actualYear - book.releaseYear;
    return bookAge > 60;
  })
  return booksOld.map((book) => book.name);
}

assert.deepStrictEqual(oldBooks(), expectedResult6);

//Exercicio 7
const expectedResult7 = 'O Senhor dos Anéis';

function authorWith3DotsOnName() {
  const bookWithauthorWith3Initials =  books.find((book) => {
    const namesOfAuthor =  book.author.name.split(' ');
    const initials = namesOfAuthor.filter((word) => word.endsWith('.'));
    return initials.length === 3;
  });
  return bookWithauthorWith3Initials.name;
}

assert.deepStrictEqual(authorWith3DotsOnName(), expectedResult7);