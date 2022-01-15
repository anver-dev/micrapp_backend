const logoutService = require('../services/logoutService');

const handleLogout = (req, res) => {
  const logout = logoutService.logout();
  //Buscar al usuario por el token

  //Borrar el token
  res.sendStatus(204);
};

module.exports = { handleLogout };