const { usuario } = require('../data/models');

const logout = (token) => {
  return updatedUser = usuario.update({ llave_temporal: '' }, { where: { llave_temporal: token } });
}

module.exports = { logout };
