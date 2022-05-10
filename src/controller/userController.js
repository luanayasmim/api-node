import express, { request, response } from 'express';
import db from '../service/userService.js';
import { body, validationResult } from 'express-validator';

const router = express.Router();

router.get('/',(request, response) => {
  response.status(200).json({message: 'Deu tudo certo na nossa primeira requisição'});
});

router.post('/', [
  //Middleware
  body("email").isEmail().withMessage('O email informado é inválido'),
  // body(user).is().withMessage(''),
  body("password").not().isEmpty().withMessage('Informe a senha!'),
], async (request, response) => {
  //Validação dos dados (request)
  const errors=validationResult(request);

  if(!errors.isEmpty()){
    return response.status(400).json({message: errors.array()});
  }

  const email = request.body.email;
  const password = request.body.password;
  const user = request.body.user;

  //Dá para fazer dessa outra forma, mais prática
  //const {email,password,user} = request.body; 

  await db.insertUser(email, password, user);

  response.status(201).json({message: 'Cadastrei um novo usuário'});
});
 
export default router;

//nunca poderemos ter o mesmo método para o mesmo url.