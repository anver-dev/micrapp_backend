const logoutService = require('../services/logoutService');

const handleLogout = (req, res) => {
  const token = 'llavetemporalRosa'; //De prueba
  const logout = logoutService.logout(token);
  if (logout[0] === 0){ //No hubo ningún cambio, no se encontró la sesión con el token especificado
    return res.sendStatus(204);
  }
  //Borrar el token
  res.sendStatus(204);
};

module.exports = { handleLogout };