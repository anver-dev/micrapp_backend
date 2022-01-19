const userService = require('../services/registerService');

//Aquí no va a llegar todo.
const handleNewUser = async (req, res) => {
  const {nombre, apellido_paterno, email, pwd} = newUser;
  if (!nombre || !apellido_paterno || !email || !pwd) return res.status(500).json('Debe llenar, al menos, los campos marcados con una * ');

  const register = await userService.createNewUser(req.body);

  if (register !== null) return res.status(409).json('Cuenta de correo electrónico registrada'); //Conflict;

  res.status(201).json({"success": 'Registro exitoso'});
};

module.exports = { handleNewUser };