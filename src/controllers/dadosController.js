var dadosModel = require("../models/dadosModel");

function buscarAlternativasMaisSelecionadas(req, res) {

    var idQuestao = req.params.idQuestao;

    dadosModel.buscarAlternativasMaisSelecionadas(idQuestao).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as alternativas selecionadas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarAcertosErros(req, res) {

    dadosModel.buscarAcertosErros().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os acertos e erros.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


function buscarQuantasVezesOQuizFoiRealizado(req, res) {

    dadosModel.buscarQuantasVezesOQuizFoiRealizado().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar a quantidade de vezes que o quiz foi realizado.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    buscarAcertosErros,
    buscarAlternativasMaisSelecionadas,
    buscarQuantasVezesOQuizFoiRealizado
}