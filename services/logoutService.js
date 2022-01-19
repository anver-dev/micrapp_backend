const logoutBusiness = require('../domain/logoutBusiness');

const logout = (token) => {
  return logoutBusiness.logout(token);
}

module.exports = { logout };