var express = require("express");
var router = express.Router();

var quizController = require("../controllers/quizController");

router.get("/quiz1", function (req, res) {
  quizController.buscarPerguntasQuiz1(req, res);
});

router.post("/respostas", function (req, res) {
  quizController.cadastrarRespostasQ1(req, res);
})

module.exports = router;