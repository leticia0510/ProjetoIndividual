var quizModel = require("../models/quizModel");

function buscarPerguntasQuiz1(req, res) {

  quizModel.buscarPerguntasQuiz1().then((resultado) => {
    if (resultado.length > 0) {
      res.status(200).json(resultado);
    } else {
      res.status(204).json([]);
    }
  }).catch(function (erro) {
    console.log(erro);
    console.log("Houve um erro ao buscar os quiz: ", erro.sqlMessage);
    res.status(500).json(erro.sqlMessage);
  });
}


function cadastrarRespostasQ1(req, res) {
  var acerto = req.body.acertoServer;
  var fkquestao = req.body.fkquestaoServer;
  var fkusuario = req.body.fkusuarioServer;
  var opcaoSele = req.body.opcaoSeleServer;

  if (acerto == undefined) {
    res.status(400).send("acerto está undefined!");
  } else if (fkquestao == undefined) {
    res.status(400).send("fkquestao está undefined!");
  } else if (fkusuario == undefined) {
    res.status(400).send("fkusuario está undefined!");
  } else if (opcaoSele == undefined) {
    res.status(400).send("fkusuario está undefined!");
  } else {


    quizModel.cadastrarRespostasQ1(acerto, opcaoSele, fkquestao, fkusuario)
      .then((resultado) => {
        res.json(resultado);
      }
      ).catch((erro) => {
        console.log(erro);
        console.log(
          "\nHouve um erro ao realizar o cadastro das respostas! Erro: ",
          erro.sqlMessage
        );
        res.status(500).json(erro.sqlMessage);
      });
  }
}

module.exports = {
  buscarPerguntasQuiz1,
  cadastrarRespostasQ1
}