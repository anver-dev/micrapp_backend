const userService = require('../services/authenticationService');

const handleLogin = async (req, res) => {
  const {email, pwd} = req.body;
  if (!email || !pwd) return res.status(500).json('Email y conraseña requeridos');

  const user = await userService.login(req.body);

  if(user === null) return res.status(401).json('Usuario no encontrado');

  res.json(user);
};

module.exports = { handleLogin };