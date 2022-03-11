const logoutService = require('../services/logoutService');


//Se debe de eliminar el token para que no se pueda ingresar otra vez a la cuenta.
//Esta será importante porque sea cómo sea que se haga la utenticación del token (por medio de un hash o por medio de la BD)
//Se debe eliminar de todos modos el token de la cookie o del localstorage
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