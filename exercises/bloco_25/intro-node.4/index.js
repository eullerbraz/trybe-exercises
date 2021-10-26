const express = require('express');
const greetings = require('./greetings');
const hello = require('./hello');
const ping = require('./ping');
const users = require('./users');
const auth = require('./authMiddleware');
const err = require('./errMiddleware');
const signup = require('./signup');
const { getSimpsons, getSimpsonsById, addCharacter } = require('./simpsonsRequests');

const app = express();

app.use(express.json());

app.use(auth);

app.use(err);

app.post('/signup', signup)

app.get('/ping', ping);

app.post('/hello', hello);

app.post('/greetings', greetings);

app.put('/users/:name/:age', users)

app.get('/simpsons', getSimpsons);

app.get('/simpsons/:id', getSimpsonsById);

app.post('/simpsons', addCharacter);

app.listen(3000, () => {
  console.log('Escutando porta 3000');
});