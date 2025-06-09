var express = require("express");
var router = express.Router();

var dadosController = require("../controllers/dadosController");

router.get("/ultimas/:idAquario", function (req, res) {
    dadosController.buscarUltimasMedidas(req, res);
});

router.get("/tempo-real/:idAquario", function (req, res) {
    dadosController.buscarMedidasEmTempoReal(req, res);
})

module.exports = router;