import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';
import http from 'http';
import role from './src/server/routes/role'

// Set up the express app
const server = express();

// Log requests to the console.
server.use(logger('dev'));

// Parse incoming requests data (https://github.com/expressjs/body-parser)
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));


server.use('/api', role)

server.get('*', (req, res) => res.status(200).send({
  message: 'Welcome to the beginning of nothingness.',
}));

const port = parseInt(process.env.PORT, 10) || 8000;
server.set('port', port);

const app = http.createServer(server);
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });

export default server;


