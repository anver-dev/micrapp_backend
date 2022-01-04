const usersDB = {
  users: require('../model/users.json'),
  setUsers: function (data) { this.users = data }
};

//Aquí no va a llegar todo.
const handleNewUser = (req, res) => {
  const {name, middleName, lastName, email, pwd} = req.body;
  if (!email || !pwd) return res.status(500).json('Debe llenar, al menos, el campo email');

  const duplicate = usersDB.users.filter(person => person.email === email);
  if (duplicate) return res.sendStatus(409); //conflict

  const newUser = {
    "id": usersDB.users.length+1 || 1,
    "nombre": name,
    "apellido_paterno": lastName,
    "apellido_materno": middleName,
    "email": email,
    "contrasena": pwd,
    "llave_temporal": ""
  };

  usersDB.setUsers([...usersDB.users, newUser]);

  res.status(201).json({"success": 'Registro exitoso'});
};

module.exports = { handleNewUser };