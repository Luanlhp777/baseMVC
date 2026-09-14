const express = require('express');
const clienteController = require('./controllers/clienteController');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/update', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'update.html'));
});

app.get('/delete', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'delete.html'));
})

//ROTA PARA O UPDATE
app.put('/api/clientes/:id', clienteController.updateClient);

//ROTA PARA DELETAR
app.delete('/api/clientes/:id', clienteController.deleteClient);

//ROTA PARA OBTER CLIENTES
app.get('/api/clientes', clienteController.getAllClients);

//ROTA PARA ADICIONAR CLIENTE
app.post('/api/clientes', clienteController.createNewClient);

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});