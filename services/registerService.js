const registerBusiness = require('../domain/registerBusiness');

const createNewUser = (newUser) => {
  const {name, middleName, lastName, email, pwd} = newUser;
  if (!email || !pwd) return res.status(500).json('Debe llenar, al menos, el campo email');

  return registerBusiness.createNewUser(newUser);

};

module.exports = { createNewUser };