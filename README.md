# Documentação API - Gerenciamento de estoque e distribuição de produtos

<p align="center">
<a href='https://kenzie.com.br/'>
<img src="https://avatars.githubusercontent.com/u/56847172?s=200&v=4" alt="kenzie academy brasil"/>
</a> 
</p>

##### Projeto realizado por alunos do quarto módulo do curso fullstack da kenzie academy brasil

#### Cap_Fábio_09

#

#

> Para solucionar problemas lógisticos, de comunicação, produtividade e organização. Integrando procedimentos de empresa entre setores e centros de distribuição, evitando falha humana, conflitos de sistemas não compatíveis em diferentes áreas de uma mesma empresa, e agilizando processos.

### Tabela de Conteúdos

- [Visão Geral](#1-visão-geral)
- [Diagrama ER](#2-diagrama-er)
- [Início Rápido](#3-início-rápido)
  - [Instalando Dependências](#31-instalando-dependências)
  - [Variáveis de Ambiente](#32-variáveis-de-ambiente)
  - [Migrations](#33-migrations)
- [Autenticação](#4-autenticação)
- [Endpoints](#5-endpoints)

---

## 1. Visão Geral

##### Visão geral do projeto, um pouco das tecnologias usadas.

- [NodeJS](https://nodejs.org/en/)
- [Express](https://expressjs.com/pt-br/)
- [TypeScript](https://www.typescriptlang.org/)
- [PostgreSQL](https://www.postgresql.org/)
- [TypeORM](https://typeorm.io/)
- [Yup](https://www.npmjs.com/package/yup)

![Insomnia](https://img.shields.io/badge/Insomnia-black?style=for-the-badge&logo=insomnia&logoColor=5849BE) ![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white) ![Visual Studio](https://img.shields.io/badge/Visual%20Studio-5C2D91.svg?style=for-the-badge&logo=visual-studio&logoColor=white) ![Heroku](https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white) ![Yarn](https://img.shields.io/badge/yarn-%232C8EBB.svg?style=for-the-badge&logo=yarn&logoColor=white) ![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white) ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) ![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)

##### Ferramentas de gerenciamento de projeto utilizadas

#

| Ferramenta | Link                      |
| ---------- | ------------------------- |
| GitHub     | https://github.com/       |
| Notion     | https://www.notion.so/    |
| Diagrams   | https://app.diagrams.net/ |
| Trello     | https://trello.com/       |
| LinkTree   | https://linkr.bio/        |
| Slack      | https://slack.com/        |

#### A URL base da aplicação:

https://cap-fabio-9.herokuapp.com/

---

## 2. Diagrama ER

[ Voltar para o topo ](#tabela-de-conteúdos)

Diagrama ER da API definindo bem as relações entre as tabelas do banco de dados.

### [DER](https://ibb.co/r579BGM)

---

## 3. Início Rápido

[ Voltar para o topo ](#tabela-de-conteúdos)

### 3.1. Instalando Dependências

Clone o projeto em sua máquina e instale as dependências com o comando:

```shell
yarn
```

### 3.2. Variáveis de Ambiente

Em seguida, crie um arquivo **.env**, copiando o formato do arquivo **.env.example**:

```
cp .env.example .env
```

Configure suas variáveis de ambiente com suas credenciais do Postgres e uma nova database da sua escolha.

### 3.3. Migrations

Execute as migrations com o comando:

```
yarn typeorm migration:run -d src/data-source.ts
```

---

## 4. Autenticação

[ Voltar para o topo ](#tabela-de-conteúdos)

Por enquanto, não foi implementada autenticação.

---

## 5. Endpoints

[ Voltar para o topo ](#tabela-de-conteúdos)

### Índice

- [Store](#1-store)
  - [POST - /store](#11-criação-de-loja)
  - [GET - /store](#12-listando-lojas)
  - [GET - /store/:id](#13-listando-uma-loja)
  - [PATCH - /store/:id](#14-atualizar-loja-por-id)
  - [DELETE - /store/:id](#15-deletar-loja-por-id)
- [Products](#2-products)
- [Orders](#3-orders)
- [Storage](#4-storage)

---

## 1. **Store**

[ Voltar para os Endpoints ](#5-endpoints)

O objeto Store é definido como:

| Campo    | Tipo   | Descrição                                              |
| -------- | ------ | ------------------------------------------------------ |
| id       | string | Identificador único da loja                            |
| branch   | string | Identificador de filial da loja.                       |
| city     | string | A cidade onde a loja está alocada.                     |
| street   | string | A rua/travessa/avenida onde a loja está alocada        |
| district | string | O bairro/jardim onde a loja está alocada               |
| number   | string | O número do prédio/construção onde a loja está alocada |
| zipcode  | string | O código postal de onde a loja está alocada            |
| phone    | string | Telefone principal de contato da loja                  |

### Endpoints

| Método | Rota       | Descrição                                                               |
| ------ | ---------- | ----------------------------------------------------------------------- |
| POST   | /store     | Criação de uma loja.                                                    |
| GET    | /store     | Lista todos as lojas.                                                   |
| GET    | /store/:id | Lista uma loja, usando seu ID como parâmetro                            |
| PATCH  | /store/:id | Atualiza uma ou mais propriedades da loja, usando seu ID como parâmetro |
| DELETE | /store/:id | Deleta uma loja, usando seu ID como parâmetro                           |

---

### 1.1. **Criação de Loja**

[ Voltar para os Endpoints ](#5-endpoints)

### `/store`

### Exemplo de Request:

```
POST /store
Host: https://cap-fabio-9.herokuapp.com/
Authorization: None
Content-type: application/json
```

### Corpo da Requisição:

```json
{
  "branch": "filial1",
  "city": "cidade-sp",
  "street": "uma rua na cidade sp",
  "district": "um bairro",
  "number": "987",
  "zipcode": "22506-300",
  "phone": "12345678"
}
```

### Exemplo de Response:

```
201 Created
```

```json
{
  "id": "810bd8b0-358a-4bcf-bc37-bd0fa9fd0e59",
  "branch": "filial1",
  "city": "cidade-sp",
  "street": "uma rua na cidade sp",
  "district": "um bairro",
  "number": "987",
  "zipcode": "22506-300",
  "phone": "12345678"
}
```

### Possíveis Erros:

| Código do Erro | Descrição                                            |
| -------------- | ---------------------------------------------------- |
| 409 Conflict   | This branch of store already exists in your database |

---

### 1.2. **Listando lojas**

[ Voltar aos Endpoints ](#5-endpoints)

### `/store`

### Exemplo de Request:

```
GET /store
Host: https://cap-fabio-9.herokuapp.com/
Authorization: None
Content-type: application/json
```

### Corpo da Requisição:

```json
Vazio
```

### Exemplo de Response:

```
200 OK
```

```json
[
  {
    "id": "810bd8b0-358a-4bcf-bc37-bd0fa9fd0e59",
    "branch": "filial1",
    "city": "cidade-sp",
    "street": "uma rua na cidade sp",
    "district": "um bairro",
    "number": "987",
    "zipcode": "22506-300",
    "phone": "12345678"
  }
]
```

### Possíveis Erros:

Nenhum, o máximo que pode acontecer é retornar uma lista vazia.

---

### 1.3. **Listar loja por ID**

[ Voltar aos Endpoints ](#5-endpoints)

### `/store/:id`

### Exemplo de Request:

```
GET /store/810bd8b0-358a-4bcf-bc37-bd0fa9fd0e59
Host: https://cap-fabio-9.herokuapp.com/
Authorization: None
Content-type: application/json
```

### Parâmetros da Requisição:

| Parâmetro | Tipo   | Descrição                           |
| --------- | ------ | ----------------------------------- |
| id        | string | Identificador único da loja (Store) |

### Corpo da Requisição:

```json
Vazio
```

### Exemplo de Response:

```
200 OK
```

```json
{
  "id": "810bd8b0-358a-4bcf-bc37-bd0fa9fd0e59",
  "branch": "filial2",
  "city": "cidade-sp",
  "street": "rua: uma rua na cidade sp",
  "district": "bairro: um bairro",
  "number": "123",
  "zipcode": "123456",
  "phone": "123456"
}
```

### Possíveis Erros:

| Código do Erro | Descrição       |
| -------------- | --------------- |
| 404 Not Found  | Store not found |

### 1.4. **Atualizar loja por ID**

[ Voltar aos Endpoints ](#5-endpoints)

### `/store/:id`

### Exemplo de Request:

```
PATCH /store/810bd8b0-358a-4bcf-bc37-bd0fa9fd0e59
Host: https://cap-fabio-9.herokuapp.com/
Authorization: None
Content-type: application/json
```

### Parâmetros da Requisição:

| Parâmetro | Tipo   | Descrição                           |
| --------- | ------ | ----------------------------------- |
| id        | string | Identificador único da loja (Store) |

### Corpo da Requisição:

```json
{
  "branch": "filial1",
  "city": "cidade-sp",
  "street": "uma rua na cidade sp atualizada",
  "district": "um bairro atualizado",
  "number": "001",
  "zipcode": "22506-200",
  "phone": "12345678"
}
```

### Exemplo de Response:

```
200 OK
```

```json
{
  "id": "810bd8b0-358a-4bcf-bc37-bd0fa9fd0e59",
  "branch": "filial1",
  "city": "cidade-sp",
  "street": "uma rua na cidade sp atualizada",
  "district": "um bairro atualizado",
  "number": "001",
  "zipcode": "22506-200",
  "phone": "12345678"
}
```

### 1.5. **Deletar loja por ID**

[ Voltar aos Endpoints ](#5-endpoints)

### `/store/:id`

### Exemplo de Request:

```
DELETE /store/810bd8b0-358a-4bcf-bc37-bd0fa9fd0e59
Host: https://cap-fabio-9.herokuapp.com/
Authorization: None
Content-type: application/json
```

### Parâmetros da Requisição:

| Parâmetro | Tipo   | Descrição                           |
| --------- | ------ | ----------------------------------- |
| id        | string | Identificador único da loja (Store) |

### Corpo da Requisição:

```json
Vazio
```

### Exemplo de Response:

```
200 OK
```

```json
{
  "message": "Store deleted with sucess!"
}
```

#

#

#

---

## 2. **Product**

[ Voltar para os Endpoints ](#5-endpoints)

O objeto Product é definido como:

| Campo       | Tipo   | Descrição                              |
| ----------- | ------ | -------------------------------------- |
| id          | string | Identificador único do produto.        |
| name        | string | Nome do produto.                       |
| description | string | Uma breve descrição do produto.        |
| price       | number | O preço do produto.                    |
| category    | string | Categoria em que o produto se encaixa. |

### Endpoints

| Método | Rota          | Descrição                                                       |
| ------ | ------------- | --------------------------------------------------------------- |
| POST   | /products     | Criação de um produto.                                          |
| GET    | /products     | Lista todos os produtos.                                        |
| GET    | /products/:id | Lista um produto, usando seu ID como parâmetro                  |
| PATCH  | /products/:id | Atualiza uma ou mais propriedades, usando seu ID como parâmetro |
| DELETE | /products/:id | Deleta um prdouto, usando seu ID como parâmetro                 |

---

### 1.1. **Criação de produto**

[ Voltar para os Endpoints ](#5-endpoints)

### `/products`

### Exemplo de Request:

```
POST /products
Host: https://cap-fabio-9.herokuapp.com/
Authorization: None
Content-type: application/json
```

### Corpo da Requisição:

```json
{
  "name": "nome do produto",
  "description": "descrição do produto",
  "price": 2000, // (valor numerico referente ao preço)
  "category": "categoria do produto"
}
```

### Exemplo de Response:

```
201 Created
```

```json
{
  "id": "810bd8b0-358a-4bcf-bc37-bd0fa9fd0e59",
  "name": "nome do produto",
  "description": "descrição do produto",
  "price": 2000,
  "category": "categoria do produto"
}
```

### Possíveis Erros:

| Código do Erro | Descrição                                    |
| -------------- | -------------------------------------------- |
| 409 Conflict   | This product already exists in your database |

---

### 1.2. **Listando produtos**

[ Voltar aos Endpoints ](#5-endpoints)

### `/products`

### Exemplo de Request:

```
GET /products
Host: https://cap-fabio-9.herokuapp.com/
Authorization: None
Content-type: application/json
```

### Corpo da Requisição:

```json
Vazio
```

### Exemplo de Response:

```
200 OK
```

```json
[
  {
    "id": "810bd8b0-358a-4bcf-bc37-bd0fa9fd0e59",
    "name": "nome do produto",
    "description": "descrição do produto",
    "price": 2000,
    "category": "categoria do produto"
  }
]
```

### Possíveis Erros:

Nenhum, o máximo que pode acontecer é retornar uma lista vazia.

---

### 1.3. **Listar produto por ID**

[ Voltar aos Endpoints ](#5-endpoints)

### `/products/:id`

### Exemplo de Request:

```
GET /products/810bd8b0-358a-4bcf-bc37-bd0fa9fd0e59
Host: https://cap-fabio-9.herokuapp.com/
Authorization: None
Content-type: application/json
```

### Parâmetros da Requisição:

| Parâmetro | Tipo   | Descrição                      |
| --------- | ------ | ------------------------------ |
| id        | string | Identificador único de produto |

### Corpo da Requisição:

```json
Vazio
```

### Exemplo de Response:

```
200 OK
```

```json
{
  "id": "810bd8b0-358a-4bcf-bc37-bd0fa9fd0e59",
  "name": "nome do produto",
  "description": "descrição do produto",
  "price": 2000,
  "category": "categoria do produto"
}
```

### Possíveis Erros:

| Código do Erro | Descrição         |
| -------------- | ----------------- |
| 404 Not Found  | product not found |

### 1.4. **Atualizar produto por ID**

[ Voltar aos Endpoints ](#5-endpoints)

### `/products/:id`

### Exemplo de Request:

```
PATCH /products/810bd8b0-358a-4bcf-bc37-bd0fa9fd0e59
Host: https://cap-fabio-9.herokuapp.com/
Authorization: None
Content-type: application/json
```

### Parâmetros da Requisição:

| Parâmetro | Tipo   | Descrição                      |
| --------- | ------ | ------------------------------ |
| id        | string | Identificador único de produto |

### Corpo da Requisição:

```json
{
  "name": "nome do produto atualizado",
  "category": "categoria do produto atualizado"
}
```

### Exemplo de Response:

```
200 OK
```

```json
{
  "id": "810bd8b0-358a-4bcf-bc37-bd0fa9fd0e59",
  "name": "nome do produto atualizado",
  "description": "descrição do produto",
  "price": 2000,
  "category": "categoria do produto atualizado"
}
```

### 1.5. **Deletar produto por ID**

[ Voltar aos Endpoints ](#5-endpoints)

### `/products/:id`

### Exemplo de Request:

```
DELETE /products/810bd8b0-358a-4bcf-bc37-bd0fa9fd0e59
Host: https://cap-fabio-9.herokuapp.com/
Authorization: None
Content-type: application/json
```

### Parâmetros da Requisição:

| Parâmetro | Tipo   | Descrição                      |
| --------- | ------ | ------------------------------ |
| id        | string | Identificador único do product |

### Corpo da Requisição:

```json
Vazio
```

### Exemplo de Response:

```
200 OK
```

```json
{
  "message": "product deleted with sucess!"
}
```


#

#

#

---

#### Colaboradores

|                 |                                   |      |
| --------------- | --------------------------------- | ---- |
| Diego Berselli  | https://github.com/diegoberselli  | Lead |
| Renan Ribeiro   | https://github.com/renandcr       | Dev  |
| Jeferson Bruno  |                                   | Dev  |
| Paulo Guarnieri | https://github.com/pauloguarnieri | SM   |
| Márcio José     | https://github.com/marcio-tonholo | PO   |
| Camila Suzuki   | https://github.com/cah-suzuki     | Dev  |
