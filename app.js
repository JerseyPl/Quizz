require('@babel/register');
const morgan = require('morgan');
const express = require('express');
const path = require('path');
const ReactDOMServer = require('react-dom/server');
const React = require('react');
const ssr = require('./middleware/renderComponent');
const indexRoute = require('./routes/index.route');

const app = express();
const PORT = 3000;

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '/public')));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(ssr);
app.use('/', indexRoute);

app.listen(PORT, () => {
  console.log('Server started');
});
