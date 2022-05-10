import mysql from 'mysql2/promise'; // Um funcionalidade que o mysql2 tem é a possibilidade de usar promises

async function connect(){
    const connection = await mysql.createConnection({
        host: 'localhost', 
        user: 'root',
        password: '',
        database: 'clinicadb'
    });
    return connection;
};

export default {connect}; //Utilizando as chaves é possivel exportar mais de um.