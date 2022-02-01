const userService = require('../services/userService');
const { createJWT } = require('../lib/utils');

const handleLogin = async (req, res) => {
  const {email, pwd} = req.body;
  if (!email || !pwd) return res.status(500).json('Email y conraseña requeridos');

  const user = await userService.login(req.body);
  if(!user) return res.status(401).json({msg: 'Usuario no encontrado'});

  const isValid = user.authenticate(pwd);

  if(!isValid) return res.status(401).json({msg: 'Contraseña incorrecta'})

  //Crear el token y mandar de vuelta al cliente
  const jwt = createJWT(register);

  res.status(201).json({success: 'Bienvenido', user: user, token: jwt.token, expiresIn: jwt.expires});
};

module.exports = { handleLogin };