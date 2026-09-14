# Base MVC — Node.js, Express e MySQL

> 🚧 Projeto acadêmico em desenvolvimento

Projeto criado para praticar o padrão de arquitetura **MVC (Model, View e Controller)** utilizando **Node.js**, **Express** e **MySQL**.

A aplicação disponibiliza uma API REST para o gerenciamento de clientes, permitindo cadastrar, consultar, atualizar e excluir registros.

---

## Tecnologias utilizadas

* Node.js
* Express
* JavaScript
* MySQL
* mysql2
* HTML
* CSS
* Git
* GitHub

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

O projeto separa as responsabilidades da aplicação no seguinte fluxo:

```text
View → Controller → Model → MySQL
```

### Model

Responsável pelas consultas e alterações realizadas no banco de dados.

Arquivo:

```text
models/ClienteModel.js
```

Operações implementadas:

* cadastrar clientes;
* listar clientes;
* atualizar clientes;
* excluir clientes.

### View

Representa a interface da aplicação.

Arquivos:

```text
public/index.html
public/update.html
public/delete.html
```

### Controller

Responsável por receber as requisições HTTP, validar os dados enviados e chamar os métodos do Model.

Arquivo:

```text
controllers/clienteController.js
```

---

## Banco de dados

O projeto utiliza o banco de dados:

```text
mvc
```

Tabela:

```text
cliente
```

Estrutura utilizada:

```sql
CREATE DATABASE IF NOT EXISTS mvc;

USE mvc;

CREATE TABLE IF NOT EXISTS cliente (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    cpf VARCHAR(100) NOT NULL
);
```

---

## Rotas da API

| Método   | Rota                | Descrição                   |
| -------- | ------------------- | --------------------------- |
| `POST`   | `/api/clientes`     | Cadastra um cliente         |
| `GET`    | `/api/clientes`     | Lista todos os clientes     |
| `PUT`    | `/api/clientes/:id` | Atualiza um cliente pelo ID |
| `DELETE` | `/api/clientes/:id` | Exclui um cliente pelo ID   |

### Estrutura dos dados

As rotas de cadastro e atualização recebem os dados em formato JSON:

```json
{
  "nome": "Maria",
  "cpf": "12345678900"
}
```

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

Execute o arquivo abaixo no MySQL:

```text
banco.sql
```

Configure os dados de conexão com o banco no arquivo:

```text
config/db.js
```

Depois, inicie o servidor:

```bash
node --watch app.js
```

A aplicação ficará disponível em:

```text
http://localhost:3000
```

---

## Testando pelo PowerShell

Com o servidor em execução, as rotas podem ser testadas diretamente pelo PowerShell.

### Cadastrar um cliente

```powershell
Invoke-RestMethod `
  -Uri "http://localhost:3000/api/clientes" `
  -Method POST `
  -ContentType "application/json" `
  -Body '{"nome":"Maria","cpf":"12345678900"}'
```

### Listar todos os clientes

```powershell
Invoke-RestMethod `
  -Uri "http://localhost:3000/api/clientes" `
  -Method GET
```

### Atualizar um cliente

Troque o número `1` pelo ID do cliente desejado:

```powershell
Invoke-RestMethod `
  -Uri "http://localhost:3000/api/clientes/1" `
  -Method PUT `
  -ContentType "application/json" `
  -Body '{"nome":"Maria Atualizada","cpf":"12345678900"}'
```

### Excluir um cliente

Troque o número `1` pelo ID do cliente desejado:

```powershell
Invoke-RestMethod `
  -Uri "http://localhost:3000/api/clientes/1" `
  -Method DELETE
```

---

## Status do projeto

### Funcionalidades implementadas

* [x] Estrutura MVC;
* [x] conexão do Node.js com o MySQL;
* [x] servidor configurado com Express;
* [x] cadastro de clientes com `POST`;
* [x] listagem de clientes com `GET`;
* [x] atualização de clientes com `PUT`;
* [x] exclusão de clientes com `DELETE`;
* [x] validação dos campos obrigatórios;
* [x] páginas HTML para cadastro, atualização e exclusão;
* [x] testes das rotas pelo PowerShell;
* [x] CRUD conectado ao banco de dados.

### Próximos passos

* [ ] Integrar completamente as páginas HTML com a API;
* [ ] exibir os clientes cadastrados na interface;
* [ ] adicionar botões de edição e exclusão;
* [ ] melhorar o tratamento das respostas de erro;
* [ ] proteger as configurações do banco com variáveis de ambiente;
* [ ] finalizar a interface do CRUD.

---

## Conceitos praticados

* Arquitetura MVC
* Node.js
* Express
* MySQL
* API REST
* CRUD
* Models
* Controllers
* Views
* Rotas HTTP
* Métodos `GET`, `POST`, `PUT` e `DELETE`
* `async/await`
* JSON
* Separação de responsabilidades
* Testes de API pelo PowerShell

---

## Autor

**Luan Araujo**

Projeto acadêmico desenvolvido para praticar **MVC, Node.js, Express, APIs REST e MySQL**.
