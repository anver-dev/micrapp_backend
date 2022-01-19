const { usuario } = require('../datos/models');

const logout = (token) => {
  return updatedUser = usuario.update({ llave_temporal: '' }, { where: { llave_temporal: token } });
}

module.exports = { logout };
