var express = require("express");
var router = express.Router();

var dadosController = require("../controllers/dadosController");

router.get("/errosAcertos", function (req, res) {
    dadosController.buscarAcertosErros(req, res);
});

router.get("/alternativa/:idQuestao", function (req, res) {
    dadosController.buscarAlternativasMaisSelecionadas(req, res);
});

router.get("/qtdRealizado", function (req, res) {
    dadosController.buscarQuantasVezesOQuizFoiRealizado(req, res);
})

module.exports = router;