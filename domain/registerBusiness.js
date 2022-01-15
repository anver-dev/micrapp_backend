//const UserModel = require('../dal/models/user');

const usersDB = {
  users: require('../dal/models/user'),
  setUsers: function (data) { this.users = data }
};


const createNewUser = (newUser) => {
  const duplicate = usersDB.users.filter(person => person.email === email);
  if (duplicate) return res.sendStatus(409); //conflict

  const newUser = {
    "id": usersDB.users.length+1 || 1,
    "nombre": name,
    "apellido_paterno": lastName,
    "apellido_materno": middleName,
    "email": email,
    "contrasena": pwd,
    "llave_temporal": ""
  };

  usersDB.setUsers([...usersDB.users, newUser]);

  return true;

};

module.exports = { createNewUser };