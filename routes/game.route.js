const Game = require('../components/Game');
const router = require('./main.route');

router.get('/themes/game', (req, res) => {
  res.renderComponent(Game, {title: 'Game'});
});

module.exports = router;
