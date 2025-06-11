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

    var idQuestao = req.params.idQuestao;

    dadosModel.buscarAcertosErros(idQuestao).then(function (resultado) {
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


function buscarMedidasEmTempoReal(req, res) {

    var idAquario = req.params.idAquario;

    console.log(`Recuperando medidas em tempo real`);

    dadosModel.buscarMedidasEmTempoReal(idAquario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    buscarAcertosErros,
    buscarAlternativasMaisSelecionadas
    // buscarMedidasEmTempoReal

}