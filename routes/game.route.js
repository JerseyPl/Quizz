const router = require('express').Router();
const Game = require('../components/Game');

router.get('/', (req, res) => {
  res.renderComponent(Game, {title: 'Game'});
});

module.exports = router;
