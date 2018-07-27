const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const http = require('http');

// Set up the express app
const app = express();

// Log requests to the console.
app.use(logger('dev'));

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('*', (req, res) => res.status(200).send({
  message: 'Welcome to the beginning of nothingness.',
}));

const port = parseInt(process.env.PORT, 10) || 8000;
app.set('port', port);

const server = http.createServer(app);
server.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });

module.exports = app;


// const app = require('../app'); // The express app we just created

