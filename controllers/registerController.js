const userService = require('../services/userService');
const { createJWT } = require('../lib/utils');

//Aquí no va a llegar todo.
const handleNewUser = async (req, res) => {
  const {nombre, apellido_paterno, email, pwd} = newUser;
  if (!nombre || !apellido_paterno || !email || !pwd) return res.status(500).json('Debe llenar, al menos, los campos marcados con una * ');

  const register = await userService.createNewUser(req.body);

  //Crear el token y mandar de vuelta al cliente
  const jwt = createJWT(register);

  if (register !== null) return res.status(409).json('Cuenta de correo electrónico registrada'); //Conflict;

  res.status(201).json({success: 'Registro exitoso', user: register, token: jwt.token, expiresIn: jwt.expires});
};

module.exports = { handleNewUser };