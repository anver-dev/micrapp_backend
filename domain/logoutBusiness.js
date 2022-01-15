const usersDB = {
  users: require('../dal/models/users.json'),
  setUsers: function (data) { this.users = data }
};

const findByToken = (token) => {
  return usersDB.users.find(person => person.llave_temporal === token);
}

const logout = (token) => {
  const otherUsers = usersDB.users.filter(person => person.llave_temporal !== token);
  const modifiedUser = { ...currentUser, llave_temporal: '' };

  usersDB.setUsers([...otherUsers, modifiedUser]);

  return true;
}