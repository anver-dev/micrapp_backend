const usersDB = {
  users: require('../model/users.json'),
  setUsers: function (data) { this.users = data }
};

const handleLogin = (req, res) => {
  const {email, pwd} = req.body;
  if (!email || !pwd) return res.status(500).json('Email y conraseña requeridos');

  const user = usersDB.users.find(person => person.email === email);

  //Manejo de la contraseña encriptada
  //Creación del token temporal

  res.json({'success': 'Bienvenido'})

};

module.exports = { handleLogin };