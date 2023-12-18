const express = require('express');
const http = require('http');
const stocksController = require('./stocksController');

const app = express();
const server = http.createServer(app);

const PORT = 3001;

app.use('/stocks', stocksController);

server.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
