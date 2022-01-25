const { usuario } = require('../data/models');

const createNewUser = async (newUser) => {
  const duplicate = await usuario.findOne({ where: { email: newUser.email } });
  if (duplicate) throw new Error('Conflict: Duplicated data'); //conflict

  newUser = {
    ...newUser,
    llave_temporal: ""
  };

  return usuario.create(newUser);

};

const login = (data) => {
  const user = usuario.findOne({ where: { email: data.email, contrasena: data.pwd } })

  return user;
};

const getUserById = (id) => {
  const user = usuario.findOne({ where: { id_usuario: id } });

  return user;
}

module.exports = { createNewUser, login, getUserById };