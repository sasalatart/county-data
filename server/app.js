require('./db');

const express = require('express');
const morgan = require('morgan');
const path = require('path');
const paginate = require('express-paginate');

const app = express();

app.use(morgan('tiny'));
app.use(express.static(path.resolve(__dirname, '..', 'build')));
app.use(paginate.middleware());

app.use('/counties', require('./routes/counties'));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'public', 'index.html'));
});

module.exports = app;
