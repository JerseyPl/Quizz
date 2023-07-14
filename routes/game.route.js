const router = require("express").Router();
const Game = require("../components/Game");
const {Question} = require("../db/models");


router.post("/", async(req, res) => {
  const { id, answer } = req.body;
if(answer){
  const trueAnswer = await Question.findOne({where:{id}})

if(answer.toLowerCase() === trueAnswer.answer.toLowerCase()){
 res.json({message:"Вы ответили правильно"})
}else{
  res.json({message:`Вы ответили неправильно. Правильный ответ: ${trueAnswer.answer}`})
}
}
});

module.exports = router;
