import express  from "express";

/*** Uma API nunca pode ter o mesmo metodo para a mesma url
 *  O navegador só enxerga metodos GET
 * 
 */

const router = express.Router();
//envia informações ao frontend
router.get('/', (request, response) => {
  response.status(200).json({message: 'Deu tudo certo na primeira requisição'});
});
//adiciona infomações 
router.post('/', (request, response)=>{
  response.status(201).json({message:'Cadastrei um novo usuário!'});
});

export default router;