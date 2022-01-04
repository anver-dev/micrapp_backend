const usersDB = {
  users: require('../model/users.json'),
  setUsers: function (data) { this.users = data }
};

const handleLogout = (req, res) => {
  //Buscar al usuario por el token

  const token = ''; //De prueba
  const currentUser = usersDB.users.find(person => person.llave_temporal === token);
  if(!currentUser) {
    //Borrar el token
    return res.sendStatus(204);
  }

  const otherUsers = usersDB.users.filter(person => person.llave_temporal !== token);
  const modifiedUser = { ...currentUser, llave_temporal: '' };

  usersDB.setUsers([...otherUsers, modifiedUser]);

  //Borrar el token
  return res.sendStatus(204);
};

module.exports = { handleLogout };