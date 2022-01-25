const jwt = require('jsonwebtoken');
const PRIV_KEY = 'alguna llave rsa diferente a la de la llave pública';

const createJWT = (user) => {
  const id = user.id;
  const expiresIn = '10d';
  const payload = {
    sub: id,
    iat: Date.now()
  };

  const signedToken = jwt.sign(payload, PRIV_KEY, {  expiresIn: expiresIn, algorithm: 'RS256' });
  
  return {
    token: 'Barer ' + signedToken,
    expires: expiresIn
  }
}

module.exports = { createJWT };