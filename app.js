const express = require('express');
const morgan = require('morgan');

const app = express();

morgan.token('body', (req) => JSON.stringify(req.body));

app.use(express.static('client'));
app.get('/', (req, res) => {
    res.sendFile('./client/index.html', { root: path.dirname('') });
});
app.use(express.json());
app.use(
    morgan(
        ':method :url :status :res[content-length] - :response-time ms :body'
    )
);

module.exports = app;

// const dotenv = require('dotenv');
// dotenv.config();
// const errorHandler = require('./backend/middleware/errorHandler.js');
// app.use(errorHandler);
