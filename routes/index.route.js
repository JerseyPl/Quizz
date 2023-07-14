
const router = require('express').Router();
const mainRouter = require('./main.route');
const gameRouter = require('./game.route');
const themesRouter = require("./themes.route");

router.use('/', mainRouter);
router.use('/answer', gameRouter);
router.use("/themes", themesRouter);

module.exports = router;
