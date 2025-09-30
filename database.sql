CREATE DATABASE devs2blu;
USE devs2blu;

CREATE TABLE clientes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL
);

CREATE TABLE pedidos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    cliente_id INT NOT NULL,
    descricao VARCHAR(200),
    valor DECIMAL(10,2),
    FOREIGN KEY (cliente_id) REFERENCES clientes(id)
);
