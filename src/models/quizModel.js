var database = require("../database/config");

function buscarPerguntasQuiz1() {

  var instrucaoSql = `SELECT pergunta, alternativaA, alternativaB, alternativaC, alternativaD, alternativaCorreta FROM quiz1;`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function cadastrarRespostasQ1(empresaId, descricao) {
  
  var instrucaoSql = `INSERT INTO respostasQ1 VALUES (${descricao}, ${empresaId})`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}


module.exports = {
  buscarPerguntasQuiz1,
  cadastrarRespostasQ1
}
