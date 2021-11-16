const rescue = require('express-rescue');
const service = require('../services/Book');

const getAll = rescue(async (req, res) => {
  const { author_id } = req.query;

  const books = author_id ? await service.getByAuthorId(author_id) : await service.getAll();
  
  res.status(200).json(books);
});

const findById = rescue(async (req, res) => {
  const { id } = req.params;

  const book = await service.findById(id);

  if (book.error) return next(book.error);

  res.status(200).json(book);
});

const create = rescue(async (req, res) => {
  const { title, author_id } = req.body;
  
  const { message, code } = await service.create(title, author_id);
  
  res.status(code).json(message);
});

module.exports = { getAll, findById, create };
