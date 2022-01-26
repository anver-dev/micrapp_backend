const { Usuario } = require('../data/models');

const logout = (token) => {
  return updatedUser = Usuario.update({ llave_temporal: '' }, { where: { llave_temporal: token } });
}

module.exports = { logout };
