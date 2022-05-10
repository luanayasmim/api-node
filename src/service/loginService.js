import database from '../repository/connectionDB.js';

async function checkLogin(email, password){
    const conn = await database.connect();
  
    const sql = 'SELECT(email, senha) VALUES (?,?) from tbl_usuario ';
    const checkData = [email, password]; //parametro da função
    await conn.query(sql, checkData); //vai ser uma promisse
    conn.end();
  }