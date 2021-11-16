const Book = require('../models/Book');

const getAll = async () => Book.getAll();

const getByAuthorId = async (authorId) => Book.getByAuthorId(authorId);

const findById = async (id) => {
  const book = await Book.findById(id);

  if (!book) {
    return {
      error: {
        code: 'notFound',
        message: 'Livro não encontrado',
      },
    };
  }

  return book;
};

const create = async (title, authorId) => {
  if (!await Book.isValid(title, authorId)) {
    return { message: 'Dados inválidos', code: 400 };
  }

  await Book.create(title, authorId);

  return { message: 'Livro criado', code: 201 };
};


module.exports = { getAll, getByAuthorId, findById, create };
