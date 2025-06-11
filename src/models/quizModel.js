var database = require("../database/config");

function buscarPerguntasQuiz1() {

  var instrucaoSql = `SELECT * FROM quiz1;`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function cadastrarRespostasQ1(acerto, opcaoSele, fkquestao, fkusuario) {
  
  var instrucaoSql = `INSERT INTO respostasQ1 (acerto, opcaoSele, fkquestao, fkusuario) VALUES (${acerto}, '${opcaoSele}', ${fkquestao}, ${fkusuario});`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}


module.exports = {
  buscarPerguntasQuiz1,
  cadastrarRespostasQ1
}
