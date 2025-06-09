-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/

CREATE DATABASE projeto;
USE projeto;

CREATE TABLE usuario(
	id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(60),
    email VARCHAR(255),
    nickname VARCHAR(30),
    senha VARCHAR(255),
    fotoPerfil VARCHAR(255),
    dtNasc DATE,
    UNIQUE ix_email(email),
    UNIQUE ix_nickname(nickname)
);

CREATE TABLE posts(
	id INT PRIMARY KEY AUTO_INCREMENT,
    texto VARCHAR(255),
    publicado TIMESTAMP DEFAULT(current_timestamp()),
    fotoPost VARCHAR(255),
    fkUsuario INT,
    CONSTRAINT fk_usuario FOREIGN KEY (fkUsuario) REFERENCES usuario(id)
);

CREATE TABLE quiz1(
	id INT PRIMARY KEY AUTO_INCREMENT,
    pergunta VARCHAR(50),
    alternativaA VARCHAR(30),
    alternativaB VARCHAR(30),
    alternativaC VARCHAR(30),
    alternativaD VARCHAR(30),
    alternativaCorreta VARCHAR(20)
);

CREATE TABLE quiz2(
	id INT PRIMARY KEY AUTO_INCREMENT,
    pergunta VARCHAR(50),
    alternativaA VARCHAR(30),
    alternativaB VARCHAR(30),
    alternativaC VARCHAR(30),
    alternativaD VARCHAR(30)
);

CREATE TABLE respostasQ1 (
	id INT PRIMARY KEY AUTO_INCREMENT,
    acerto INT,
    erro INT,
    fkquestao INT,
    fkusuario INT,
    CONSTRAINT fk_res1_questao FOREIGN KEY (fkquestao) REFERENCES quiz1(id),
    CONSTRAINT fk_res1_usuario FOREIGN KEY (fkusuario) REFERENCES usuario(id)
);

CREATE TABLE resultadoQ2 (
	id INT PRIMARY KEY AUTO_INCREMENT,
    personagem VARCHAR(50),
    fkusuario INT,
    CONSTRAINT fk_rl2_usuario FOREIGN KEY (fkusuario) REFERENCES usuario(id)
);

INSERT INTO usuarios (nome, email, senha, dtNasc, nickname)
VALUES
('Lele', 'lele@email.com', '1234', '2006-10-05', 'lets'),
('Rafael', 'rafa@gmail.com', 'senha', '2006-05-29', 'rafa');

INSERT INTO quiz1 (pergunta, alternativaA, alternativaB, alternativaC, alternativaD, alternativaCorreta)
VALUES ('Qual é o nome verdadeiro do Rei Gelado?', 'Simon Petrikov', 'Gunter Gassel', 'Archer Rice', 'James Gray', 'alternativaA'),
('Qual destas princesas é real?', 'Princesa Computador', 'Princesa Embrião', 'Princesa Música', 'Princesa de Ooo', 'alternativaB'),
('Qual é o nome do microondas vivo de Jake e Finn?', 'BMO', 'Mason', 'Micro Jr', 'Neptr', 'alternativaD');

SELECT * FROM usuario;
SELECT * FROM posts;
SELECT pergunta, alternativaA, alternativaB, alternativaC, alternativaD, alternativaCorreta FROM quiz1;