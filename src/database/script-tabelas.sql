CREATE DATABASE projeto;
USE projeto;

CREATE TABLE usuario(
	id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(60),
    email VARCHAR(255),
    nickname VARCHAR(30),
    senha VARCHAR(255),
    -- fotoPerfil VARCHAR(255),
    dtNasc DATE,
    UNIQUE ix_email(email),
    UNIQUE ix_nickname(nickname)
);

CREATE TABLE posts(
	id INT PRIMARY KEY AUTO_INCREMENT,
    texto VARCHAR(255),
    publicado TIMESTAMP DEFAULT(current_timestamp()),
    -- fotoPost VARCHAR(255),
    fkUsuario INT,
    CONSTRAINT fk_usuario FOREIGN KEY (fkUsuario) REFERENCES usuario(id)
);

CREATE TABLE quiz1(
	id INT PRIMARY KEY AUTO_INCREMENT,
    pergunta VARCHAR(150),
    alternativaA VARCHAR(30),
    alternativaB VARCHAR(30),
    alternativaC VARCHAR(30),
    alternativaD VARCHAR(30),
    alternativaCorreta VARCHAR(20)
);

CREATE TABLE respostasQ1 (
	id INT PRIMARY KEY AUTO_INCREMENT,
    acerto BOOLEAN,
    opcaoSele VARCHAR(20),
    fkquestao INT,
    fkusuario INT,
    CONSTRAINT fk_res1_questao FOREIGN KEY (fkquestao) REFERENCES quiz1(id),
    CONSTRAINT fk_res1_usuario FOREIGN KEY (fkusuario) REFERENCES usuario(id)
);

INSERT INTO usuario (nome, email, senha, dtNasc, nickname)
VALUES
('Lele', 'lele@email.com', '1234', '2006-10-05', 'lets'),
('Rafael', 'rafa@gmail.com', 'senha', '2006-05-29', 'rafa');

INSERT INTO quiz1 (pergunta, alternativaA, alternativaB, alternativaC, alternativaD, alternativaCorreta)
VALUES ('Qual é o nome verdadeiro do Rei Gelado?', 'Simon Petrikov', 'Gunter Gassel', 'Archer Rice', 'James Gray', 'alternativaA'),
('Qual destas princesas é real?', 'Princesa Computador', 'Princesa Embrião', 'Princesa Música', 'Princesa de Ooo', 'alternativaB'),
('Qual é o nome do microondas vivo de Jake e Finn?', 'BMO', 'Mason', 'Micro Jr', 'Neptr', 'alternativaD'),
('Qual a personagem que faz as tortas mais deliciosas segundo Finn e Jake?', 'Marceline', 'Princesa Geleca', 'Dona Tromba', 'Princesa Frutinha', 'alternativaC'),
('Fionna e Cake são personagens criados por:', 'Jake', 'Rei Gelado', 'Princesa Caroço', 'Prismo', 'alternativaB'),
('No episódio "Jake, o tijolo" qual o animal que o Jake narra a história enquanto está vendo como é viver como um tijolo?', 'Coelho', 'Veado', 'Ouriço do mar', 'Castor', 'alternativaA'),
('Qual o instrumento que Marceline toca?', 'Piano', 'Bateria', 'Pandeiro', 'Contra-Baixo', 'alternativaB'),
('Qual é nome do lugar onde Finn e Jake moram?', 'Terra Doce', 'Terra de Uu', 'Terra de Ooo', 'Terra de Bu', 'alternativaC'),
('Qual é a língua que Lady Íris (namorada do Jake) fala?', 'Chinês', 'Inglês', 'Alemão', 'Coraeno', 'alternativaD'),
('Qual o nome da Grande querra que aconteceu antes dos eventos de Hora de Aventura?', 'Guerra americana', 'Guerra dos Doce', 'Guerra dos Cogumelos', 'Guerra Naval das Mentas', 'alternativaC');

SELECT * FROM usuario;
SELECT * FROM posts;
SELECT * FROM quiz1;
SELECT * FROM respostasQ1;

SELECT pergunta, alternativaA, alternativaB, alternativaC, alternativaD, alternativaCorreta FROM quiz1;

SELECT q1.pergunta, SUM(acerto) AS acertos, count(pergunta) - SUM(acerto) AS erros FROM respostasQ1 r1
INNER JOIN quiz1 q1 ON r1.fkquestao = q1.id
GROUP BY q1.pergunta;

SELECT SUM(acerto) AS acerto, count(pergunta) - SUM(acerto) AS erros FROM respostasQ1 r1
INNER JOIN quiz1 q1 ON r1.fkquestao = q1.id
WHERE r1.fkquestao = 1;

SELECT q1.pergunta, alternativaA, r1.opcaoSele, COUNT(r1.opcaoSele) AS alternativa FROM respostasQ1 r1
INNER JOIN quiz1 q1 ON r1.fkquestao = q1.id
WHERE r1.fkquestao = 3
GROUP BY r1.opcaoSele, q1.pergunta, alternativaA;

SELECT COUNT(fkusuario) / 10 AS realizado FROM respostasQ1;