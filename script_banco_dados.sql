/*
Script para criar as tabelas do banco de dados
Executar este script no MySQL antes de rodar a aplicação
*/

-- Criar banco de dados
CREATE DATABASE IF NOT EXISTS projeto_db;
USE projeto_db;

-- Tabela de Usuários
CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(100) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  email VARCHAR(100) NOT NULL UNIQUE,
  role ENUM('admin', 'user') DEFAULT 'user',
  isActive BOOLEAN DEFAULT true,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Tabela de Departamentos
CREATE TABLE IF NOT EXISTS PRD_DEPARTAMENTO (
  idDepartamento INT AUTO_INCREMENT PRIMARY KEY,
  descricao VARCHAR(150) NOT NULL
);

-- Tabela de Marcas
CREATE TABLE IF NOT EXISTS PRD_MARCA (
  idMarca INT AUTO_INCREMENT PRIMARY KEY,
  descricao VARCHAR(100) NOT NULL
);

-- Tabela de Unidades de Medida
CREATE TABLE IF NOT EXISTS PRD_UNIDADE_MEDIDA (
  idUnidadeMedida INT AUTO_INCREMENT PRIMARY KEY,
  descricao VARCHAR(50) NOT NULL
);

-- Tabela de Categorias
CREATE TABLE IF NOT EXISTS PRD_CATEGORIA (
  idCategoria INT AUTO_INCREMENT PRIMARY KEY,
  idDepartamento INT NOT NULL,
  descricao VARCHAR(150) NOT NULL,
  FOREIGN KEY (idDepartamento) REFERENCES PRD_DEPARTAMENTO(idDepartamento)
);

-- Tabela de Subcategorias
CREATE TABLE IF NOT EXISTS PRD_SUBCATEGORIA (
  idSubCategoria INT AUTO_INCREMENT PRIMARY KEY,
  idCategoria INT NOT NULL,
  descricao VARCHAR(150) NOT NULL,
  FOREIGN KEY (idCategoria) REFERENCES PRD_CATEGORIA(idCategoria)
);

-- Tabela de Produtos
CREATE TABLE IF NOT EXISTS PRD_PRODUTO (
  idProduto INT AUTO_INCREMENT PRIMARY KEY,
  codigo VARCHAR(200) NOT NULL,
  descricao TEXT NOT NULL,
  idCategoria INT,
  idSubCategoria INT,
  idMarca INT,
  idUnidadeMedida INT,
  especificacaoTecnica VARCHAR(50),
  status ENUM('A', 'I') DEFAULT 'A',
  pesoBruto DECIMAL(12, 2),
  pesoLiquido DECIMAL(12, 2),
  otdMin VARCHAR(50),
  codBarra VARCHAR(50),
  FOREIGN KEY (idCategoria) REFERENCES PRD_CATEGORIA(idCategoria),
  FOREIGN KEY (idSubCategoria) REFERENCES PRD_SUBCATEGORIA(idSubCategoria),
  FOREIGN KEY (idMarca) REFERENCES PRD_MARCA(idMarca),
  FOREIGN KEY (idUnidadeMedida) REFERENCES PRD_UNIDADE_MEDIDA(idUnidadeMedida)
);

-- Tabela de Preços de Venda
CREATE TABLE IF NOT EXISTS PRD_PRECO_VENDA (
  idPrecoVenda INT AUTO_INCREMENT PRIMARY KEY,
  idProduto INT NOT NULL,
  precoVenda DECIMAL(12, 2) NOT NULL,
  dataVigenciaInicial DATE NOT NULL,
  dataValidadeFinal DATE,
  FOREIGN KEY (idProduto) REFERENCES PRD_PRODUTO(idProduto)
);

-- Tabela de Produtos Similares
CREATE TABLE IF NOT EXISTS PRD_PRODUTO_SIMILAR (
  idProdutoSimilar INT AUTO_INCREMENT PRIMARY KEY,
  idProduto INT NOT NULL,
  idProdutoSimilar2 INT NOT NULL,
  FOREIGN KEY (idProduto) REFERENCES PRD_PRODUTO(idProduto)
);
