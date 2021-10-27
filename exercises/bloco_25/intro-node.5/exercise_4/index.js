const express = require('express');
const teamRouter = require('./routers/teamRouter');
const PORT = 3000;

const app = express();

app.use('/teams', teamRouter);

app.listen(PORT, () => console.log('Run server http://localhost:3000'));
