const router = require('express').Router();
const ThemesList = require('../components/ThemesList');
const { Theme, Question } = require('../db/models');
const Game = require('../components/Game');

router.get('/', async (req, res) => {
  console.log(1)
  const theme = await Theme.findAll();
  // console.log(theme);
  res.renderComponent(ThemesList, { title: 'Themes', theme });
});
router.get('/:themeId/question/:questionIndex', async (req, res) => {
  console.log(2)
  // console.log(req.params);
  const { themeId, questionIndex } = req.params;
  const quest = await Question.findAll({ where: { themeId } });
  let index = Number(questionIndex) + 1;
  // console.log(index);
  if (index <= quest.length) {
    res.renderComponent(Game, {
      title: 'Quest',
      index,
      question: quest[index - 1],
    });
  }
});
module.exports = router;
