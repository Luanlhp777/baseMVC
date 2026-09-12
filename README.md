# Base MVC — Node.js + Express + MySQL

> 🚧 Projeto acadêmico em desenvolvimento

Projeto criado para praticar o padrão de arquitetura **MVC (Model, View e Controller)** utilizando **Node.js**, **Express** e **MySQL**.

A aplicação trabalha com cadastro de clientes e separa as responsabilidades entre interface, controle das requisições e acesso ao banco de dados.

---

## Tecnologias utilizadas

- Node.js
- Express
- JavaScript
- MySQL
- mysql2
- HTML
- CSS
- Git
- GitHub

---

## Estrutura do projeto

```text
baseMVC/
├── config/
│   └── db.js
├── controllers/
│   └── clienteController.js
├── models/
│   └── ClienteModel.js
├── public/
│   ├── index.html
│   ├── update.html
│   └── delete.html
├── app.js
├── banco.sql
├── package.json
├── mvc.pdf
├── mvc roadmap.png
└── AULA MVC.txt
```

---

## Arquitetura MVC

O projeto segue a estrutura:

```text
View
  ↓
Controller
  ↓
Model
  ↓
MySQL
```

### Model

Responsável pelo acesso ao banco de dados.

Arquivo:

```text
models/ClienteModel.js
```

Possui operações para:

- cadastrar clientes;
- listar clientes;
- atualizar clientes.

### View

Representa a interface da aplicação.

Arquivos:

```text
public/index.html
public/update.html
public/delete.html
```

### Controller

Responsável por receber as requisições e utilizar o Model.

Arquivo:

```text
controllers/clienteController.js
```

---

## Banco de dados

O projeto utiliza o banco:

```text
mvc
```

Tabela:

```text
cliente
```

Estrutura:

```sql
CREATE TABLE IF NOT EXISTS cliente (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    cpf VARCHAR(100) NOT NULL
);
```

---

## API

Atualmente o projeto possui a rota:

```text
POST /api/clientes
```

Exemplo de requisição:

```json
{
  "nome": "Maria",
  "cpf": "12345678900"
}
```

Em caso de sucesso:

```text
201 Created
```

---

## Status do projeto

### Implementado

- estrutura MVC;
- conexão com MySQL;
- cadastro de clientes;
- consulta de clientes no Model;
- atualização de clientes no Model;
- Controller de clientes;
- página de cadastro;
- páginas de atualização e exclusão;
- servidor Express.

### Em desenvolvimento

- rota GET para listar clientes;
- conclusão da atualização;
- rota PUT;
- exclusão de clientes;
- rota DELETE;
- integração completa das páginas HTML com a API;
- finalização do CRUD.

---

## Como executar

Clone o repositório:

```bash
git clone https://github.com/Luanlhp777/baseMVC.git
```

Entre na pasta:

```bash
cd baseMVC
```

Instale as dependências:

```bash
npm install
```

Execute o arquivo:

```text
banco.sql
```

no MySQL.

Caso necessário, ajuste as configurações em:

```text
config/db.js
```

Depois inicie o servidor:

```bash
node app.js
```

A aplicação ficará disponível em:

```text
http://localhost:3000
```

---

## Conceitos praticados

- MVC
- Node.js
- Express
- MySQL
- API REST
- CRUD
- Models
- Controllers
- Views
- Rotas HTTP
- `async/await`
- JSON
- Separação de responsabilidades

---

## Autor

**Luan Araujo**

Projeto acadêmico desenvolvido para prática de **MVC, Node.js, Express e MySQL**.