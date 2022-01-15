const logoutBusiness = require('../domain/logoutBusiness');

const logout = () => {
  const token = ''; //De prueba

  const currentUser = logoutBusiness.findByToken(token);
  if(!currentUser) {
    //Borrar el token
    return res.sendStatus(204);
  }

  return logoutBusiness.logout(token);
}