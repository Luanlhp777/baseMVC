const mysql = require('mysql2');

// Configurar a conexão com o banco de dados
const connection = mysql.createConnection({
    host: 'COLOCAR_HOST',
    port: 3306,
    user: 'COLOCAR_USER',
    password: 'COLOCAR_SENHA',
    database: 'mvc',
});

// Conectar ao banco de dados
connection.connect((err) => {
    if (err) {
        console.error('Erro de conexão: ' + err.stack);
        return;
    }

});


module.exports = connection.promise();