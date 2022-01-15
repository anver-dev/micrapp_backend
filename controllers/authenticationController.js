const authenticationService = require('../services/authenticationService');

const handleLogin = async (req, res) => {
  const user = await authenticationService.login(req.body);

  res.json(user);
};

module.exports = { handleLogin };