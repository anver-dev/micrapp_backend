const register = require('../services/userService');
//const register = require('../domain/userBusiness');

const test = async () => {
  const log = await register.createNewUser({
    nombre: "Carol",
    apellido_paterno: "Lima",
    apellido_materno: null,
    email: "carol@gmail.com",
    contrasena: "1234",
    id_rol: 4
  });
  console.log('resultado del log:');
  console.log(log);
}

test();