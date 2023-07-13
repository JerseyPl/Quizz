const router = require('express').Router();
const Themes = require('../components/Themes');
const { Theme } = require('../db/models');

router.get('/', (req, res) => {
  res.renderComponent(Themes, { title: 'Themes' });
});

module.exports = router;
