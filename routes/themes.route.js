const router = require("express").Router();
const ThemesList = require("../components/ThemesList");
const { Theme, Question } = require("../db/models");
const Game = require("../components/Game");

router.get("/", async (req, res) => {
  const theme = await Theme.findAll();
  res.renderComponent(ThemesList, { title: "Themes", theme });
});
router.get("/:themeId/question/:questionIndex", async (req, res) => {
  const { themeId, questionIndex } = req.params;
  const quest = await Question.findAll({ where: { themeId } });
  let index = Number(questionIndex) + 1;
  if (index <= quest.length) {
    res.renderComponent(Game, {
      title: "Quest",
      index,
      question: quest[index - 1],
    });
  } else {
    res.redirect("/");
  }
});
module.exports = router;
