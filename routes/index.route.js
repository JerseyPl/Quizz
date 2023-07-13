const router = require('express').Router();
const ReactDOMServer = require('react-dom/server');
const React = require('react');
const mainRouter = require('./main.route');
const gameRouter = require('./game.route');

router.use('/', mainRouter);
router.use('/temes/game', gameRouter);
module.exports = router;
