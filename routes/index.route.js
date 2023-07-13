
const router = require('express').Router();
const ReactDOMServer = require('react-dom/server');
const React = require('react');
const mainRouter = require('./main.route');
const gameRouter = require('./game.route');
const themesRouter = require("./themes.route");

router.use('/', mainRouter);
router.use('/themes/game', gameRouter);
router.use("/themes", themesRouter);

module.exports = router;
