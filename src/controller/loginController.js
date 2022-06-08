import express from "express";
import login from "../service/loginService.js";
import {sendEmail} from '../helpers/sendEmail.js';
import {body, validationResult} from "express-validator";

const router = express.Router();

router.post('/', async (request, response)=>{
    const { email, password } = request.body;
    const validationUser = await login.login(email, password);

    if(validationUser.length>0){
        response.status(200).json({message:"Login efetuado!"});
        //Enviando e-mail de confirmação de login
        sendEmail(user_emal, newPassword);
    }else{
        response.status(401).json({message:"E-mail ou senha inválidos!"});
    }
});

export default router;