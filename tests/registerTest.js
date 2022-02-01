const register = require('../services/userService');
//const register = require('../domain/userBusiness');

const test = async () => {
  const log = await register.createNewUser({
    nombre: "Mario",
    apellido_paterno: "Secundario",
    apellido_materno: null,
    email: "mario@gmail.com",
    contrasena: "1234",
    id_rol: 4
  });
  console.log('resultado del log:');
  console.log(log);
}

test();