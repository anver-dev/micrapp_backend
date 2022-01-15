const registerService = require('../services/registerService');

//Aquí no va a llegar todo.
const handleNewUser = async (req, res) => {
  const register = await registerService.createNewUser(req.body);

  res.status(201).json({"success": 'Registro exitoso'});
};

module.exports = { handleNewUser };