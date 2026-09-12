const db = require('../config/db');

const Cliente = {

    createNewClient: async(nome, cpf) => {
        try {
            const [result] = await db.execute('INSERT INTO Cliente (nome, cpf) VALUES(?, ?)', [nome, cpf]);

            return { id: result.insertId, nome, cpf }
        } catch (error) {
            throw error;
        }
    },
    getAllClients: async ()=>{
        try {
            const [rows] = await db.query('SELECT * FROM Cliente');
            return rows;
        } catch (error) {
            throw error;
        }
    },
}
module.exports = Cliente;