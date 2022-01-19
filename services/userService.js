const userBusiness = require('../domain/userBusiness');

const createNewUser = (newUser, res) => {
  return userBusiness.createNewUser(newUser);
};

const login = (credentials) => {
  return userBusiness.login(credentials);
};

module.exports = { createNewUser, login };