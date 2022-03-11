const { Usuario } = require('../data/models');

const createNewUser = async (newUser) => {
  const duplicate = await Usuario.findOne({
    where: { email: newUser.email }
  });
  if (duplicate) return null;

  newUser = Usuario.build({
    ...newUser
  });

  return newUser.save();

};

const login = (data) => {
  const user = Usuario.findOne({
    where: { email: data.email },
    include: {
      association: "rol",
      include:{
        association: "permiso",
        include: { association: "nivel_acceso" }
      }
    }
  });

  return user;
};

const getUserById = (id) => {
  const user = Usuario.findOne({ where: { id_usuario: id } });

  return user;
};


module.exports = { createNewUser, login, getUserById };