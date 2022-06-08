const config ={
    host:'smtp.gmail.com',
    port:587,
    secure: false,
    auth:{
      user: 'email@email.com',
      pass: 'senha123senha',
    },
    tls: {
      rejectUnauthorized: false,
    },
  }
  
export {config};