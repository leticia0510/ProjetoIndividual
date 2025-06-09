var database = require("../database/config");

function buscarPerguntasQuiz1() {

  var instrucaoSql = `SELECT pergunta, alternativaA, alternativaB, alternativaC, alternativaD, alternativaCorreta FROM quiz1;`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function cadastrar(empresaId, descricao) {
  
  var instrucaoSql = `INSERT INTO (descricao, fk_empresa) aquario VALUES (${descricao}, ${empresaId})`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}


module.exports = {
  buscarPerguntasQuiz1,
  cadastrar
}
