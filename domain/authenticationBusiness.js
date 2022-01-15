const { usuario,  sequelize } = require('../dal/models');

const login = (data) => {
  const user = usuario.findOne({ where: { email: data.email, contrasena: data.pwd } })
  //sequelize.close();

  return user;
  //Manejo de la contraseña encriptada
  //Creación del token temporal
}

module.exports = { login };