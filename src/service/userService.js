import database from '../repository/connectionDB.js';

async function insertUser(email, password, user){
    const conn=await database.connect();
    const sql='INSERT INTO tbl_usuarios VALUES(?, ?, ?);';
    const insertData=[email, password, user];
    await conn.query(sql, insertData);
    conn.end();
}
export default {insertUser};