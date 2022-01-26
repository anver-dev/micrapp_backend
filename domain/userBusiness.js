const { Usuario } = require('../data/models');

const createNewUser = async (newUser) => {
  const duplicate = await Usuario.findOne({ where: { email: newUser.email } });
  if (duplicate) throw new Error('Conflict: Duplicated data'); //conflict

  newUser = Usuario.build({
    ...newUser,
    llave_temporal: ""
  });

  return Usuario.save();

};

const login = (data) => {
  const user = Usuario.findOne({ where: { email: data.email, contrasena: data.pwd } })

  return user;
};

const getUserById = (id) => {
  const user = Usuario.findOne({ where: { id_usuario: id } });

  return user;
}

module.exports = { createNewUser, login, getUserById };