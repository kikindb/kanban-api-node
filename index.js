const dotenv = require('dotenv');

dotenv.config({
  path: `.env.${process.env.NODE_ENV}`,
});

console.log('env: ' + process.env.NODE_ENV);

const express = require('express');
const app = express();

require('./startup/routes')(app);
const port = process.env.PORT || 3000;
let server;

server = app.listen(port, () => console.log(`Listening on port ${port}...`));

module.exports = server;
