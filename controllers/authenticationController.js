const authenticationService = require('../services/authenticationService');

const handleLogin = (req, res) => {
  const user = authenticationService.login(req.body);

  res.json(user);
};

module.exports = { handleLogin };