var express = require("express");
var router = express.Router();

var dadosController = require("../controllers/dadosController");

router.get("/errosAcertos/:idQuestao", function (req, res) {
    dadosController.buscarAcertosErros(req, res);
});

router.get("/alternativa/:idQuestao", function (req, res) {
    dadosController.buscarAlternativasMaisSelecionadas(req, res);
});

router.get("/tempo-real/:idAquario", function (req, res) {
    dadosController.buscarMedidasEmTempoReal(req, res);
})

module.exports = router;