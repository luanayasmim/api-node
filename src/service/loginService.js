import database from '../repository/connectionDB.js';

async function login(email, password){
    const conn = await database.connect();
  
    const sql = 'SELECT *  FROM tbl_usuarios WHERE email=? AND senha=? ';
    const loginData = [email, password]; //parametro da função
    const [rows]= await conn.query(sql, loginData);
    conn.end();
    return rows [0];
  }

async function reset(email, password){
  const conn= await database.connect();
  const sql = 'UPDATE tbl_usuarios SET senha = ? WHERE email = ?;'
  const resetData = [password, email];
  conn.query(sql, resetData);
  conn.end();

  return true;
}

export default {login, reset};