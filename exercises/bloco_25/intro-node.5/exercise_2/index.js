const express = require('express');
const validateToken = require('./middlewares/validateToken');
const fetchApi = require('./middlewares/fetchApi');

const app = express();

app.use(express.json());

app.get(
  '/btc/price',
  validateToken,
  fetchApi,
);

app.listen(3000, () => {
console.log('listening on port 3000');
});
