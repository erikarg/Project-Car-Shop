# Project Car Shop :car:

<details>
<summary>:brazil: Português</summary>

## Descrição

Projeto desenvolvido durante o terceiro módulo (desenvolvimento back-end) do curso da Trybe.

## Objetivo

Desenvolver uma API feita em TypeScript e MongoDB (utilizando Mongoose) para gerenciar o banco de dados de uma concessionária de veículos. Trata-se de um CRUD utilizando arquitetura do tipo REST, em camadas MSC, e o código foi escrito sob o conceito de POO e princípios SOLID. Também conta com testes de cobertura.

## Stacks utilizadas

* **Back-end:** MongoDB, Mongoose
* **Plataforma:** Docker
* **Linguagem:** TypeScript

## Executando a aplicação

Realize o clone do projeto através do comando:

`git clone git@github.com:erikarg/Project_Car_Shop.git`

Acesse a pasta e suba os containers através do comando:

`docker-compose up -d`

Agora é só iniciar a aplicação:

`npm run dev

## Rotas

### Carros

| Requisição   | Função | URL       
| :---------- | :------- | :-----------
| `POST` | Cadastra um carro  | http://localhost:3001/cars
| `GET` | Retorna a lista de carros | http://localhost:3001/cars
| `GET` | Retorna o carro através do ID | http://localhost:3001/cars/:id
| `PUT` | Atualiza o carro através do ID | http://localhost:3001/cars/:id
| `DELETE` | Exclui o carro através do ID | http://localhost:3001/cars/:id

### Motocicletas

| Requisição   | Função | URL       
| :---------- | :------- | :-----------
| `POST` | Cadastra uma moto  | http://localhost:3001/motorcycles
| `GET` | Retorna a lista de motos | http://localhost:3001/motorcycles
| `GET` | Retorna a moto através do ID | http://localhost:3001/motorcycles/:id
| `PUT` | Atualiza a moto através do ID | http://localhost:3001/motorcycles/:id
| `DELETE` | Exclui a moto através do ID | http://localhost:3001/motorcycles/:id

</details>

<details>
<summary>:us: English</summary>

## Description

Project developed during the third module (back-end development) of the Trybe course.

## Objective

Develop an API made in TypeScript and MongoDB (using Mongoose) to manage the database of a car dealership. It is a CRUD using REST architecture, in MSC layers, and the code was written under the concept of OOP and SOLID principles. It also has coverage tests.

## Stacks

* **Back-end:** MongoDB, Mongoose
* **Platform:** Docker
* **Language:** TypeScript

## Running the application

Clone the project using the command:

`git clone git@github.com:erikarg/Project_Car_Shop.git`

Access the folder and upload the containers using the command:

`docker-compose up -d`

Run the application:

`npm run dev`

## Routes

### Cars

| Method   | Function | URL       
| :---------- | :------- | :-----------
| `POST` | Register a new car  | http://localhost:3001/cars
| `GET` | Return a list of all cars | http://localhost:3001/cars
| `GET` | Return a car by it's ID | http://localhost:3001/cars/:id
| `PUT` | Update a car by it's ID | http://localhost:3001/cars/:id
| `DELETE` | Delete the car by it's ID | http://localhost:3001/cars/:id

### Motorcycles

| Method   | Function | URL       
| :---------- | :------- | :-----------
| `POST` | Register a new motorcycle  | http://localhost:3001/motorcycles
| `GET` | Return a list of all motorcycles | http://localhost:3001/motorcycles
| `GET` | Return a motorcycle by it's ID | http://localhost:3001/motorcycles/:id
| `PUT` | Update a motorcycle by it's ID | http://localhost:3001/motorcycles/:id
| `DELETE` | Delete the motorcycle by it's ID | http://localhost:3001/motorcycles/:id

</details>
