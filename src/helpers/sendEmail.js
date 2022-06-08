import nodemailer from 'nodemailer';
import {config} from './smtp.js';

const trasporter=nodemailer.createTransport(config);

function sendEmail(email, newPassword){
  trasporter.sendMail({
    subject:`Redefinição de senha`,
    from:`Suporte da Clinica <email@email.com>`,
    to: `${email}`,
    html:`
    <html>
      <body>
        <p>Olá! tudo bem?
          <br>Você solicitou a recupeção de senha para o site: <em>EtecClinic.com</em>.</br>
        Sua nova senha de acesso é: <h3>${newPassword}</h3>
       </p>
       <a href="#">Clique aqui para acessar o site</a>
      </body>
    </html>
    `
  });
}

export {sendEmail};