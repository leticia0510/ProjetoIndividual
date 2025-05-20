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
    email VARCHAR(100),
    senha VARCHAR(50),
    fotoPerfil VARCHAR(255),
    dtNasc DATE,
    UNIQUE ix_email(email)
);

CREATE TABLE post(
	id INT PRIMARY KEY AUTO_INCREMENT,
    texto VARCHAR(255),
    publicado TIMESTAMP DEFAULT(current_timestamp()),
    fotoPost VARCHAR(255),
    fkUsuario INT,
    CONSTRAINT fk_usuario FOREIGN KEY (fkUsuario) REFERENCES usuario(id)
);