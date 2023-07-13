const router = require('express').Router();
const Themes = require('../components/ThemesList');
const { Theme } = require('../db/models');

router.get('/themes', async (req, res) => {
  const themes = await Theme.findAll();
  console.log(themes);
  res.renderComponent(Themes, { title: 'Themes', themes });
});

module.exports = router;
