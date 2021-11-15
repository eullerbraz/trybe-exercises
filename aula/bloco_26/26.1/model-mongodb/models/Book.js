const { ObjectId } = require('mongodb');
const connection = require('./connection');
const Author = require('./Author');

const getAll = async () => {
  return connection().then((db) => db.collection('books').find().toArray())
  .then((books) => books.map(({_id, title, author_id}) => ({
    _id,
    title,
    authorId: author_id,
  })));
};

const getByAuthorId = async (authorId) => {
  return connection().then((db) => db.collection('books').find({ author_id: Number(authorId) }).toArray())
  .then((books) => books.map(({_id, title, author_id}) => ({
    _id,
    title,
    authorId: author_id,
  })));
};

const findById = async (id) => {
  const book = await connection().then((db) => db.collection('books').findOne({ _id: new ObjectId(id) }))

  return book ?
  {
    _id: book._id,
    title: book.title,
    authorId: book.author_id,
  } :
  null;
};

const isValid = async (title, authorId) => {
  if (!title || typeof title !== 'string') return false;
  // Aqui a única alteração é que `authorId` deve ser uma string de 24 caracteres, e não mais um número
  if (!authorId || typeof authorId !== 'string' || authorId.length !== 24 || !(await Author.findById(authorId))) return false;

  return true;
}

const create = async (title, authorId) => {
  connection().then((db) => db.collection('books').insertOne({ title, authorId }));
};

module.exports = {
  getAll,
  getByAuthorId,
  findById,
  isValid,
  create,
};
