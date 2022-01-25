const userService = require('../services/userService');

const handleLogin = async (req, res) => {
  const {email, pwd} = req.body;
  if (!email || !pwd) return res.status(500).json('Email y conraseña requeridos');

  const user = await userService.login(req.body);

  //Crear el token y mandar de vuelta al cliente
  const jwt = createJWT(register);

  if(user === null) return res.status(401).json('Usuario no encontrado');

  res.status(201).json({success: 'Bienvenido', user: user, token: jwt.token, expiresIn: jwt.expires});
};

module.exports = { handleLogin };