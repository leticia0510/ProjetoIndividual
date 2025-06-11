var database = require("../database/config");

function buscarAlternativasMaisSelecionadas(idQuestao) {

    var instrucaoSql = `
        SELECT q1.pergunta, r1.opcaoSele, 
                COUNT(r1.opcaoSele) AS alternativa 
        FROM respostasQ1 r1
            INNER JOIN quiz1 q1 ON r1.fkquestao = q1.id
            WHERE r1.fkquestao = ${idQuestao}
            GROUP BY q1.pergunta, r1.opcaoSele
            ORDER BY alternativa;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarAcertosErros() {

    var instrucaoSql = `
        SELECT SUM(acerto) AS acerto, 
                count(pergunta) - SUM(acerto) AS erros 
        FROM respostasQ1 r1
            INNER JOIN quiz1 q1 ON r1.fkquestao = q1.id;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal(idAquario) {

    var instrucaoSql = `SELECT 
        dht11_temperatura as temperatura, 
        dht11_umidade as umidade,
                        DATE_FORMAT(momento,'%H:%i:%s') as momento_grafico, 
                        fk_aquario 
                        FROM medida WHERE fk_aquario = ${idAquario} 
                    ORDER BY id DESC LIMIT 1`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarAcertosErros,
    buscarAlternativasMaisSelecionadas
    //buscarMedidasEmTempoReal
}
