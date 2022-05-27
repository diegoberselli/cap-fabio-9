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
  - [POST - /store/login](#11-login-na-loja)
  - [GET - /store](#12-listando-lojas)
  - [GET - /store/:id](#13-listar-loja-por-id)
  - [GET - /store/orders/:id](#14-listando-orders-da-loja)
  - [PATCH - /store/:id](#15-atualizar-loja-por-id)
  - [DELETE - /store/:id](#16-deletar-loja-por-id)
- [Products](#2-products)
  - [POST - /products](#21-criação-de-produto)
  - [GET - /products](#22-listando-produtos)
  - [GET - /products/:id](#23-listar-produto-por-id)
  - [PATCH - /products/:id](#24-atualizar-produto-por-id)
  - [DELETE - /products/:id](#25-deletar-produto-por-id)
- [Orders](#3-order)
  - [POST - /order](#31-criação-de-order)
  - [GET - /order](#32-listando-orders)
  - [GET - /order/:id](#33-listar-order-por-id)
  - [PATCH - /order/:id](#34-atualizar-order-por-id)
  - [DELETE - /order/:id](#35-deletar-order-por-id)
  - [GET - /order/status/:status](#36-listar-order-por-status)
- [Storage](#4-storage)
  - [POST - /storage/add](#41-adicionar-produto)
  - [PATCH - /storage/update](#44-atualizar-produto)
  - [DELETE - /storage/delete/:id](#45-deletar-produto-estoque)

---

## 1. **Store**

[ Voltar para os Endpoints ](#5-endpoints)

O objeto Store é definido como:

| Campo      | Tipo   | Descrição                                              |
| ---------- | ------ | ------------------------------------------------------ |
| id         | string | Identificador único da loja                            |
| branch     | string | Identificador de filial da loja.                       |
| city       | string | A cidade onde a loja está alocada.                     |
| street     | string | A rua/travessa/avenida onde a loja está alocada        |
| district   | string | O bairro/jardim onde a loja está alocada               |
| state      | string | O estado onde a loja está alocada                      |
| number     | string | O número do prédio/construção onde a loja está alocada |
| zipcode    | string | O código postal de onde a loja está alocada            |
| phone      | string | Telefone principal de contato da loja                  |
| create_At  | string | Data e hora que a loja foi criada                      |
| updated_At | string | Data e hora que a loja foi atualizada                  |

### Endpoints

| Método | Rota              | Descrição                                                               |
| ------ | ----------------- | ----------------------------------------------------------------------- |
| POST   | /store            | Criação de uma loja.                                                    |
| POST   | /store/login      | Login na loja passando a filial e a senha no corpo da requisição        |
| GET    | /store            | Lista todos as lojas.                                                   |
| GET    | /store/:id        | Lista uma loja, usando seu ID como parâmetro                            |
| GET    | /store/orders/:id | Lista todos os pedidos daquela loja, usando seu ID como parâmetro       |
| PATCH  | /store/:id        | Atualiza uma ou mais propriedades da loja, usando seu ID como parâmetro |
| DELETE | /store/:id        | Deleta uma loja, usando seu ID como parâmetro                           |

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
  "branch": "3",
  "city": "Curitiba",
  "street": "Tiradentes",
  "district": "Centro",
  "number": "2000",
  "zipcode": "80010000",
  "phone": "(43)3478-0001",
  "password": "123456",
  "state": "Paraná"
}
```

### Schema de Validação com Yup:

```javascript
 schema: {
    body: {
      yupSchema: yup.object().shape({
        branch: yup.string().required("branch name is required"),
        city: yup.string().required("city name is required"),
        street: yup.string().required("street name is required"),
        district: yup.string().required("district name is required"),
        number: yup.string().required("number is required"),
        zipCode: yup.string().required("zipCode number is required"),
        phone: yup.string().required("phone number is required"),
        password: yup.string().required("password number is required"),
        state: yup.string().required("state number is required"),
      }),
      validateOptions: {
        abortEarly: false,
      },
    },
  },
```

OBS.: Chaves não presentes no schema serão removidas.

### Exemplo de Response:

```
201 Created
```

```json
{
  "id": "9fa3b1d3-b506-4640-b940-109bc554fee2",
  "branch": "3",
  "city": "Curitiba",
  "street": "Tiradentes",
  "district": "Centro",
  "state": "Paraná",
  "number": "2000",
  "zipcode": "80010000",
  "phone": "(43)3478-0001",
  "password": "$2a$08$PH6LQjqeYKnJpsjhrCdDWunF0QgOFa/lhNi2a6f.7hyMO97cuK2he",
  "created_at": "2022-05-27T05:16:16.188Z",
  "update_at": "2022-05-27T05:16:16.188Z",
  "storage": {
    "id": "442d0368-60b8-4a3b-a5bc-a21a8178f872"
  }
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
Authorization: Beare token
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
    "id": "9fa3b1d3-b506-4640-b940-109bc554fee2",
    "branch": "3",
    "city": "Curitiba",
    "street": "Tiradentes",
    "district": "Centro",
    "state": "Paraná",
    "number": "2000",
    "zipcode": "80010000",
    "phone": "(43)3478-0001",
    "password": "$2a$08$PH6LQjqeYKnJpsjhrCdDWunF0QgOFa/lhNi2a6f.7hyMO97cuK2he",
    "created_at": "2022-05-27T05:16:16.188Z",
    "update_at": "2022-05-27T05:16:16.188Z",
    "storage": {
      "id": "442d0368-60b8-4a3b-a5bc-a21a8178f872",
      "products": []
    }
  },
  {
    "id": "43c51139-8c08-4594-a321-b81284bedaa0",
    "branch": "1",
    "city": "Apucarana-pr",
    "street": "Tiradentes",
    "district": "Centro",
    "state": "Paraná",
    "number": "820",
    "zipcode": "86860001",
    "phone": "(43)3475-0001",
    "password": "$2a$08$ZpY7yczdMYNV5dKlib8Qeeczn5IgIxm2LyfSvBJEEJmJ//XXAgdtS",
    "created_at": "2022-05-27T05:10:44.311Z",
    "update_at": "2022-05-27T05:10:44.311Z",
    "storage": {
      "id": "d8d71e16-4b9d-48a0-a899-13e7bb239b51",
      "products": []
    }
  }
]
```

### Possíveis Erros:

O usuário precisa estar logado no sistema

---

### 1.3. **Listar loja por ID**

[ Voltar aos Endpoints ](#5-endpoints)

### `/store/:id`

### Exemplo de Request:

```
GET /store/:id
Host: https://cap-fabio-9.herokuapp.com/
Authorization: Bearer token
Content-type: application/json
```

### Parâmetros da Requisição:

| Parâmetro | Tipo   | Descrição                           |
| --------- | ------ | ----------------------------------- |
| id        | string | Identificador único da loja (Store) |

### Possíveis Erros:

Id da loja incorreto.
O usuário precisa estar logado no sitema

```json

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
{
  "id": "9fa3b1d3-b506-4640-b940-109bc554fee2",
  "branch": "3",
  "city": "Curitiba",
  "street": "Tiradentes",
  "district": "Centro",
  "state": "Paraná",
  "number": "2000",
  "zipcode": "80010000",
  "phone": "(43)3478-0001",
  "password": "$2a$08$PH6LQjqeYKnJpsjhrCdDWunF0QgOFa/lhNi2a6f.7hyMO97cuK2he",
  "created_at": "2022-05-27T05:16:16.188Z",
  "update_at": "2022-05-27T05:16:16.188Z",
  "storage": {
    "id": "442d0368-60b8-4a3b-a5bc-a21a8178f872",
    "products": []
  }
}
```

### Possíveis Erros:

| Código do Erro | Descrição       |
| -------------- | --------------- |
| 404 Not Found  | Store not found |

### 1.4. **Listando orders da loja**

[ Voltar aos Endpoints ](#5-endpoints)

### `/store/orders/:id`

### Exemplo de Request:

```
GET /store/orders/f8037574-a607-47f7-806a-4754302851ac
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
 [
	{
		"id": "09e8834a-5290-4be5-b5d6-8eb0fc80b0e0",
		"storeId": "f8037574-a607-47f7-806a-4754302851ac",
		"amount": 100,
		"status": "intransit",
		"created_at": "2022-05-25T16:48:14.251Z",
		"update_at": "2022-05-25T16:48:14.251Z",
		"products": [
			{
				"id": "6c1fabf3-24cc-4c65-900c-32ff3b11ec31",
				"price_product": 25,
				"quantity_product_order": 2,
				"directed_from_id": "2",
				"product": {
					"id": "6460053f-0126-414a-92b4-9af597d8705c",
					"name": "pão",
					"description": "descrição do produto",
					"price": 10,
					"category": "panificadora",
					"img_URL": ""
				}
			}]}
]
```

### Possíveis Erros:

Nenhum, o máximo que pode acontecer é retornar uma lista vazia.
O usuário precisa estar logado no sitema

### 1.5. **Atualizar loja por ID**

[ Voltar aos Endpoints ](#5-endpoints)

### `/store/:id`

### Exemplo de Request:

```
PATCH /store/810bd8b0-358a-4bcf-bc37-bd0fa9fd0e59
Host: https://cap-fabio-9.herokuapp.com/
Authorization: Bearer token
Content-type: application/json
```

### Parâmetros da Requisição:

| Parâmetro | Tipo   | Descrição                           |
| --------- | ------ | ----------------------------------- |
| id        | string | Identificador único da loja (Store) |

### Corpo da Requisição:

```json
{
  "branch": "9",
  "city": "Maringá",
  "street": "Parmessa",
  "district": "Centro",
  "number": "1200",
  "zipcode": "86550001",
  "phone": "(45)3455-0001",
  "password": "123456",
  "state": "Paraná"
}
```

### Exemplo de Response:

```
200 OK
```

```json
{
  "id": "26c07c49-9a76-4e12-a556-ced5a772084c",
  "branch": "9",
  "city": "Maringá",
  "street": "Parmessa",
  "district": "Centro",
  "state": "Paraná",
  "number": "1200",
  "zipcode": "86550001",
  "phone": "(45)3455-0001",
  "password": "$2a$08$TSMlWphTBCa7huvimiGFFeNQZiJSRsonlArRoITR4J8NZiMRM8agO",
  "created_at": "2022-05-27T13:56:49.776Z",
  "update_at": "2022-05-27T13:58:02.270Z",
  "storage": {
    "id": "e54fce63-5124-401c-96c6-7d858aa9bcc4",
    "products": []
  }
}
```

### Possíveis Erros:

Id incorreto.
O usuário precisa estar logado no sitema

### 1.6. **Deletar loja por ID**

[ Voltar aos Endpoints ](#5-endpoints)

### `/store/:id`

### Exemplo de Request:

```
DELETE /store/810bd8b0-358a-4bcf-bc37-bd0fa9fd0e59
Host: https://cap-fabio-9.herokuapp.com/
Authorization: Bearer token
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
204 OK
```

```json
Vazio
```

///////////////////////////////////////////////////////////

### 1.5. **Efetuar o login no sistema da loja**

[ Voltar aos Endpoints ](#5-endpoints)

### `/store/login`

### Exemplo de Request:

```
PATCH /store/810bd8b0-358a-4bcf-bc37-bd0fa9fd0e59
Host: https://cap-fabio-9.herokuapp.com/
Authorization: none
Content-type: application/json
```

### Corpo da Requisição:

```json
{
  "branch": "11",
  "password": "123456"
}
```

### Exemplo de Response:

```
200 OK
```

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJicmFuY2giOiIxMSIsImlhdCI6MTY1MzY2NDA4MywiZXhwIjoxNjUzNzUwNDgzfQ.O4Yfq8L1-ErB1WL1-vpZu7swfqS2QwziIOER4g69thg"
}
```

### Possíveis Erros:

Filial(branch) ou senha(password) incorretos

#

#

#

---

## 2. **Products**

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

### 2.1. **Criação de produto**

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

### 2.2. **Listando produtos**

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

### 2.3. **Listar produto por ID**

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

### 2.4. **Atualizar produto por ID**

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

### 2.5. **Deletar produto por ID**

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
204 OK
```

#

#

#

---

## 3. **Order**

[ Voltar para os Endpoints ](#5-endpoints)

O objeto Order é definido como:

| Campo      | Tipo                   | Descrição                                                                                                       |
| ---------- | ---------------------- | --------------------------------------------------------------------------------------------------------------- |
| id         | string                 | Identificador único do pedido                                                                                   |
| storeId    | string                 | Identificador de filial da loja que fez o pedido.                                                               |
| amount     | string                 | Soma do valor total dos produtos contidos no pedido.                                                            |
| status     | string                 | Confere ao pedido o status de pending,intransit ou finished                                                     |
| created_at | string                 | Data e hora que a order foi criada                                                                              |
| updated_at | string                 | Data e hora que a order foi atualizada                                                                          |
| products   | array                  | Array contendo os objetos produtos que foram adicionados a order                                                |
|            | Objeto products        | O objeto product dentro de products array contém :                                                              |
|            | id                     | Identificador único do produto da order :                                                                       |
|            | price_product          | Preço do produto no momento da compra :                                                                         |
|            | quantity_product_order | Quantidade do produto no pedido :                                                                               |
|            | directed_from_id       | Identificador único do local de onde o produto saiu, podendo ser da própria loja ou do centro de distribuição : |
|            | Objeto product         | O objeto product contém referencia para o product do banco de dados com os seguintes campos:                    |
|            | id                     | Identificador único do produto no banco de dados:                                                               |
|            | name                   | Nome do produto :                                                                                               |
|            | description            | Descrição do produto se houver :                                                                                |
|            | price                  | Preço do produto atualizado com o banco de dados :                                                              |
|            | category               | Categoria do produto :                                                                                          |
|            | img_URL                | Url da imagem do produto se houver :                                                                            |

### Endpoints

| Método | Rota                  | Descrição                                                              |
| ------ | --------------------- | ---------------------------------------------------------------------- |
| POST   | /order                | Criação de um pedido.                                                  |
| GET    | /order                | Lista todos os pedidos.                                                |
| GET    | /order/:id            | Lista um pedido, usando seu ID como parâmetro                          |
| GET    | /order/status/:status | Lista todos os pedidos que possuirem o status fornecido como parâmetro |
| PATCH  | /order/:id            | Atualiza status do pedido, usando seu ID como parâmetro                |
| DELETE | /order/:id            | Deleta um pedido, usando seu ID como parâmetro                         |

---

### 3.1. **Criação de Order**

[ Voltar para os Endpoints ](#5-endpoints)

### `/order`

### Exemplo de Request:

```
POST /order
Host: https://cap-fabio-9.herokuapp.com/
Authorization: None
Content-type: application/json
```

### Corpo da Requisição:

```json
{
  "storeId": "f8037574-a607-47f7-806a-4754302851ac",
  "productArray": [
    {
      "id": "6460053f-0126-414a-92b4-9af597d8705c",
      "price_product": 25,
      "quantity_product_order": 2,
      "directed_from_id": "f8037574-a607-47f7-806a-4754302851ac"
    },
    {
      "id": "6460053f-0126-414a-92b4-9af597d8705c",
      "price_product": 25,
      "quantity_product_order": 2,
      "directed_from_id": "f8037574-a607-47f7-806a-4754302851ac"
    }
  ],
  "status": "intransit"
}
```

### Schema de Validação com Yup:

```javascript
 schema: {
    body: {
      yupSchema: yup.object().shape({
        status: yup.string().required("Please select a status: pending, finished, in transit").oneOf(["pending", "finished", "in transit"]),
      }),
      validateOptions: {
        abortEarly: false,
      },
    },
  },
```

OBS.: Chaves não presentes no schema serão removidas.

### Exemplo de Response:

```
201 Created
```

```json
{
  "storeId": "f8037574-a607-47f7-806a-4754302851ac",
  "created_at": "2022-05-25T17:11:16.574Z",
  "update_at": "2022-05-25T17:11:16.574Z",
  "amount": 100,
  "status": "intransit",
  "id": "cb9f16b2-cf1c-4b4d-a650-adb8b024969a",
  "store": {
    "id": "f8037574-a607-47f7-806a-4754302851ac",
    "branch": "filiac3",
    "city": "cidade-sp",
    "street": "rua: uma rua na cidade sp",
    "district": "bairro: um bairro",
    "number": "123",
    "zipcode": "123456",
    "phone": "123456",
    "created_at": "2022-05-25T16:47:25.595Z",
    "update_at": "2022-05-25T16:47:25.595Z"
  }
}
```

### Possíveis Erros:

Nenhum

---

### 3.2. **Listando orders**

[ Voltar aos Endpoints ](#5-endpoints)

### `/order`

### Exemplo de Request:

```
GET /order
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
		"id": "423b076a-0906-46a4-8f63-830c19fe53ea",
		"storeId": "6b275a73-cf2d-4322-ab3b-317f5f454ac6",
		"amount": 100,
		"status": "intransit",
		"created_at": "2022-05-25T16:26:14.691Z",
		"update_at": "2022-05-25T16:26:14.691Z",
		"products": [
			{
				"id": "d4be5086-548b-48d8-9509-7dd8c3e2b370",
				"price_product": 25,
				"quantity_product_order": 2,
				"directed_from_id": "6b275a73-cf2d-4322-ab3b-317f5f454ac6",
				"product": {
					"id": "6460053f-0126-414a-92b4-9af597d8705c",
					"name": "pão",
					"description": "descrição do produto",
					"price": 10,
					"category": "panificadora",
					"img_URL": "",
					"created_at": "2022-05-25T18:11:42.048Z",
					"update_at": "2022-05-25T18:11:42.048Z"
				}
			}
]
```

### Possíveis Erros:

Nenhum, o máximo que pode acontecer é retornar uma lista vazia.

---

### 3.3. **Listar order por ID**

[ Voltar aos Endpoints ](#5-endpoints)

### `/order/:id`

### Exemplo de Request:

```
GET /order/423b076a-0906-46a4-8f63-830c19fe53ea
Host: https://cap-fabio-9.herokuapp.com/
Authorization: None
Content-type: application/json
```

### Parâmetros da Requisição:

| Parâmetro | Tipo   | Descrição                             |
| --------- | ------ | ------------------------------------- |
| id        | string | Identificador único do pedido (Order) |

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
		"id": "423b076a-0906-46a4-8f63-830c19fe53ea",
		"storeId": "6b275a73-cf2d-4322-ab3b-317f5f454ac6",
		"amount": 100,
		"status": "intransit",
		"created_at": "2022-05-25T16:26:14.691Z",
		"update_at": "2022-05-25T16:26:14.691Z",
		"products": [
			{
				"id": "d4be5086-548b-48d8-9509-7dd8c3e2b370",
				"price_product": 25,
				"quantity_product_order": 2,
				"directed_from_id": "2",
				"product": {
					"id": "6460053f-0126-414a-92b4-9af597d8705c",
					"name": "pão",
					"description": "descrição do produto",
					"price": 10,
					"category": "panificadora",
					"img_URL": "",
					"created_at": "2022-05-25T18:11:42.048Z",
					"update_at": "2022-05-25T18:11:42.048Z"
				}
			}
```

### Possíveis Erros:

| Código do Erro | Descrição       |
| -------------- | --------------- |
| 404 Not Found  | Order not found |

### 3.4. **Atualizar order por ID**

[ Voltar aos Endpoints ](#5-endpoints)

### `/order/:id`

### Exemplo de Request:

```
PATCH /order/423b076a-0906-46a4-8f63-830c19fe53ea
Host: https://cap-fabio-9.herokuapp.com/
Authorization: None
Content-type: application/json
```

### Parâmetros da Requisição:

| Parâmetro | Tipo   | Descrição                            |
| --------- | ------ | ------------------------------------ |
| id        | string | Identificador único da order (Order) |

### Corpo da Requisição:

```json
{
  "status": "finished"
}
```

### Exemplo de Response:

```
200 OK
```

```json
{
  "message": "Order status updated successfully",
  "order": {
    "id": "423b076a-0906-46a4-8f63-830c19fe53ea",
    "storeId": "6b275a73-cf2d-4322-ab3b-317f5f454ac6",
    "amount": 100,
    "status": "finished",
    "created_at": "2022-05-25T16:26:14.691Z",
    "update_at": "2022-05-25T18:16:52.302Z",
    "products": [
      {
        "id": "d4be5086-548b-48d8-9509-7dd8c3e2b370",
        "price_product": 25,
        "quantity_product_order": 2,
        "directed_from_id": "2",
        "product": {
          "id": "6460053f-0126-414a-92b4-9af597d8705c",
          "name": "pão",
          "description": "descrição do produto",
          "price": 10,
          "category": "panificadora",
          "img_URL": "",
          "created_at": "2022-05-25T18:11:42.048Z",
          "update_at": "2022-05-25T18:11:42.048Z"
        }
      }
    ]
  }
}
```

### 3.5. **Deletar order por ID**

[ Voltar aos Endpoints ](#5-endpoints)

### `/order/:id`

### Exemplo de Request:

```
DELETE /order/423b076a-0906-46a4-8f63-830c19fe53ea
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
Vazio
```

### 3.6. **Listar order por status**

[ Voltar aos Endpoints ](#5-endpoints)

### `/order/:status`

### Exemplo de Request:

```
GET /order/intransit
Host: https://cap-fabio-9.herokuapp.com/
Authorization: None
Content-type: application/json
```

### Parâmetros da Requisição:

| Parâmetro | Tipo   | Descrição                                                          |
| --------- | ------ | ------------------------------------------------------------------ |
| status    | string | Status do pedido (Order) , pode ser: pending,intransit ou finished |

### Corpo da Requisição:

```json
Vazio
```

### Exemplo de Response:

```
200 OK
```

```json
[{
		"id": "423b076a-0906-46a4-8f63-830c19fe53ea",
		"storeId": "6b275a73-cf2d-4322-ab3b-317f5f454ac6",
		"amount": 100,
		"status": "intransit",
		"created_at": "2022-05-25T16:26:14.691Z",
		"update_at": "2022-05-25T16:26:14.691Z",
		"products": [
			{
				"id": "d4be5086-548b-48d8-9509-7dd8c3e2b370",
				"price_product": 25,
				"quantity_product_order": 2,
				"directed_from_id": "2",
				"product": {
					"id": "6460053f-0126-414a-92b4-9af597d8705c",
					"name": "pão",
					"description": "descrição do produto",
					"price": 10,
					"category": "panificadora",
					"img_URL": "",
					"created_at": "2022-05-25T18:11:42.048Z",
					"update_at": "2022-05-25T18:11:42.048Z"
				}
			}
    ]
```

### Possíveis Erros:

Nenhum, apenas uma lista vazia caso não encontre nenhuma order

#

#

#

---

## 4. **Storage**

[ Voltar para os Endpoints ](#5-endpoints)

### Endpoints

| Método | Rota                | Descrição                                                 |
| ------ | ------------------- | --------------------------------------------------------- |
| POST   | /storage/add        | Adicionar produtos no estoque da loja que efetuou o login |
| PATCH  | /storage/update     | Atualizar produtos no estoque da loja que efetuou o login |
| DELETE | /storage/delete/:id | Deletar produtos do estoque da loja que efetuou o login   |

---

### 4.1. **Adicionar produtos no estoque**

[ Voltar para os Endpoints ](#5-endpoints)

### `/storage/add`

### Exemplo de Request:

```
POST /storage/add
Host: https://cap-fabio-9.herokuapp.com/
Authorization: Bearer token
Content-type: application/json
```

Definição do objeto no corpo da requisição:

| Chave    | Tipo   | Descrição                                  |
| -------- | ------ | ------------------------------------------ |
| id       | string | Identificador único do produto no estoque  |
| quantity | number | Quantidade de produtos a serem armazenados |
| price    | number | Preço do produto                           |

### Corpo da Requisição:

```json
{
  {
  "products": [
    {"id": "270b0ab7-82af-4c17-b676-ea1f79943a4b", "quantity": 40, "price": 80},
		{"id": "8295acbb-560b-41ce-a028-2874dd0fcf4c", "quantity": 10, "price": 3200}

  ]
}
}
```

### Exemplo de Response:

```
200 Ok
```

```json
{
  {
	"message": "Successfully stored products",
	"addedProducts": [
		{
			"id": "270b0ab7-82af-4c17-b676-ea1f79943a4b",
			"quantity": 40,
			"price": 80
		},
		{
			"id": "8295acbb-560b-41ce-a028-2874dd0fcf4c",
			"quantity": 10,
			"price": 3200
		}
	]
}
}
```

### 4.2. **Atualizando o Estoque**

[ Voltar aos Endpoints ](#5-endpoints)

### `/storage/update`

### Exemplo de Request:

```
GET /storage/update
Host: https://cap-fabio-9.herokuapp.com/
Authorization: Bearer tpken
Content-type: application/json
```

### Corpo da Requisição:

```json
{
  "id_product_storage": "728bb033-197d-4313-9864-e7fa2601cd80",
  "quantity": 60,
  "price": 80
}
```

### Exemplo de Response:

```
200 OK
```

```json
{
  "message": "Successfully apdated",
  "productUpdated": {
    "id": "728bb033-197d-4313-9864-e7fa2601cd80",
    "quantity": 60,
    "price": 80,
    "created_at": "2022-05-27T14:35:13.058Z",
    "updated_at": "2022-05-27T14:37:53.760Z",
    "product": {
      "id": "270b0ab7-82af-4c17-b676-ea1f79943a4b",
      "name": "The Last Of Us",
      "description": "Jogo de sobrevivência em terceira pessoa...",
      "price": 80,
      "category": "Jogos",
      "img_URL": "urllllll",
      "created_at": "2022-05-27T05:01:57.105Z",
      "update_at": "2022-05-27T14:24:19.454Z"
    }
  }
}
```

---

### 4.3. **Deletar produtos do estoque**

[ Voltar aos Endpoints ](#5-endpoints)

### `/storage/delete/:id`

### Exemplo de Request:

```
DELETE /storage/delete/:id
Host: https://cap-fabio-9.herokuapp.com/
Authorization: Bearer token
Content-type: application/json
```

### Parâmetros da Requisição:

| Parâmetro | Tipo   | Descrição                                 |
| --------- | ------ | ----------------------------------------- |
| id        | string | Identificador único do produto no estoque |

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
  "message": "Product deleted successfully",
  "productDeleted": {
    "id": "728bb033-197d-4313-9864-e7fa2601cd80",
    "quantity": 60,
    "price": 80,
    "created_at": "2022-05-27T14:35:13.058Z",
    "updated_at": "2022-05-27T14:37:53.760Z",
    "product": {
      "id": "270b0ab7-82af-4c17-b676-ea1f79943a4b",
      "name": "The Last Of Us",
      "description": "Jogo de sobrevivência em terceira pessoa...",
      "price": 80,
      "category": "Jogos",
      "img_URL": "urllllll",
      "created_at": "2022-05-27T05:01:57.105Z",
      "update_at": "2022-05-27T14:24:19.454Z"
    }
  }
}
```

### Possíveis Erros:

| Código do Erro  | Descrição          |
| --------------- | ------------------ |
| 400 Bad Request | Invalid identifier |

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
