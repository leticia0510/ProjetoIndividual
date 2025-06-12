var database = require("../database/config");

function buscarAlternativasMaisSelecionadas(idQuestao) {

    var instrucaoSql = `
        SELECT q1.pergunta, r1.opcaoSele, 
                COUNT(r1.opcaoSele) AS alternativa 
        FROM respostasQ1 r1
            INNER JOIN quiz1 q1 ON r1.fkquestao = q1.id
            WHERE r1.fkquestao = ${idQuestao}
            GROUP BY q1.pergunta, r1.opcaoSele
            ORDER BY opcaoSele;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarAcertosErros() {

    var instrucaoSql = `
        SELECT q1.pergunta, 
                r1.fkquestao,
                SUM(r1.acerto) AS acertos,
                count(q1.pergunta) - SUM(r1.acerto) AS erros 
        FROM respostasQ1 r1
            INNER JOIN quiz1 q1 ON r1.fkquestao = q1.id
            GROUP BY q1.pergunta, r1.fkquestao;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarQuantasVezesOQuizFoiRealizado(idAquario) {

    var instrucaoSql = `SELECT COUNT(fkusuario) / 3 AS realizado FROM respostasQ1;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarAcertosErros,
    buscarAlternativasMaisSelecionadas,
    buscarQuantasVezesOQuizFoiRealizado
}
