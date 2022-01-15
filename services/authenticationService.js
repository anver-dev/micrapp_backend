const authenticationBusiness = require('../domain/authenticationBusiness');

const login = (credentials) => {
  const {email, pwd} = credentials;
  if (!email || !pwd) return res.status(500).json('Email y conraseña requeridos');

  return authenticationBusiness.login(credentials);
}

module.exports = { login };