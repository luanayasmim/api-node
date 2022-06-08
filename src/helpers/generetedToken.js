import jwt from 'jsonwebtoken';

function generetedToken(){
    return jwt.sign({info: {email, userName}},
        'Cr!pt0gr@f1@', {expiresIn: 60*60 /* Duração em segundo para a expiração do Token */}
    );
}

export {generetedToken};