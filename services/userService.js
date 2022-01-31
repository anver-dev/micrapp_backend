const userBusiness = require('../domain/userBusiness');

const createNewUser = (newUser, res) => {
  return userBusiness.createNewUser(newUser);
};

const login = (credentials) => {
  return userBusiness.login(credentials);
};

const getUserById = (id) => {
  return userBusiness.getUserById(id);
}

module.exports = { createNewUser, login, getUserById };