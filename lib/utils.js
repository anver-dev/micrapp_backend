const jwt = require('jsonwebtoken');
const path = require('path');
const fs = require('fs');

const pathToKey = path.join(__dirname, '..', 'rsa_priv.pem');
const PRIV_KEY = fs.readFileSync(pathToKey, 'utf8');

const createJWT = (user) => {
  const id_user = user.id_usuario;
  const expiresIn = '1h';
  const payload = {
    sub: id_user,
    email: user.email,
    rol: user.id_rol,
    fecha_hoy: Date.now()
  };

  const signedToken = jwt.sign(payload, PRIV_KEY, {  expiresIn: expiresIn, algorithm: 'RS256' });
  
  return {
    token: 'Barer ' + signedToken,
    expires: expiresIn
  }
}

module.exports = { createJWT };