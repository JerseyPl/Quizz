const router = require('express').Router();
const ReactDOMServer = require('react-dom/server');
const React = require('react');
const Main = require('../components/Main');

router.get('/', (req, res) => {
  res.renderComponent(Main, { title: 'Quiz' });
});

module.exports = router;
