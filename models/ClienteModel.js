const db = require('../config/db');

const Cliente = {

    createNewClient: async (nome, cpf) => {
        try {
            const [result] = await db.execute('INSERT INTO cliente (nome, cpf) VALUES(?, ?)', [nome, cpf]);

            return { id: result.insertId, nome, cpf }
        } catch (error) {
            throw error;
        }
    },
    getAllClients: async () => {
        try {
            const [rows] = await db.query('SELECT * FROM cliente');
            return rows;
        } catch (error) {
            throw error;
        }
    },
    updateClient: async (id, nome, cpf) => {
        try {
            if (!id) {
                throw new Error('ID do cliente é necessário!');
            }
            const [result] = await db.execute('UPDATE cliente SET nome = ?, cpf = ? WHERE id = ?', [nome, cpf, id]);

            if (result.affectedRows === 0) {
                throw new Error('Cliente não cadastrado!')
            }

            return {
                id: Number(id),
                nome,
                cpf
            };
        } catch (error) {
            throw error;
        }
    },
    deleteClient: async (id) => {
        try {
            if (!id) {
                throw new Error('ID do cliente é necessário!');
            }
            const [result] = await db.execute('DELETE FROM cliente WHERE id = ?', [id]);

            if (result.affectedRows === 0) {
                throw new Error('Cliente não encontrado')
            }
            return { mensage: 'Cliente excluido com sucesso' };
        } catch (error) {
            throw error;
        }
    }

};
module.exports = Cliente;