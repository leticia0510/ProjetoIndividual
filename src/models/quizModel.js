var database = require("../database/config");

function buscarPerguntasQuiz1() {

  var instrucaoSql = `SELECT pergunta, alternativaA, alternativaB, alternativaC, alternativaD, alternativaCorreta FROM quiz1;`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function cadastrarRespostasQ1(acerto, fkquestao, fkusuario) {
  
  var instrucaoSql = `INSERT INTO respostasQ1 (acerto, fkquestao, fkusuario) VALUES (${acerto}, ${fkquestao}, ${fkusuario});`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}


module.exports = {
  buscarPerguntasQuiz1,
  cadastrarRespostasQ1
}
