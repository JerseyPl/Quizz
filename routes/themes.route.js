const router = require('express').Router();
const ThemesList = require('../components/ThemesList');
const { Theme } = require('../db/models');

router.get('/', async (req, res) => {
  const theme = await Theme.findAll();
  console.log(theme);
  res.renderComponent(ThemesList, { title: 'Themes', theme });
});

module.exports = router;
