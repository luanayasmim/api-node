import database from '../repository/connectionDB.js';

async function insertUser(email, password, user){
  const conn = await database.connect();

  const sql = 'INSERT INTO tbl_usuarios (email, senha, usuario) VALUES (?,?,?)';
  const insertData = [email, password, user]; //parametro da função
  await conn.query(sql, insertData); //vai ser uma promisse
  conn.end();
}

export default {insertUser};