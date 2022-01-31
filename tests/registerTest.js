const register = require('../services/userService');
//const register = require('../domain/userBusiness');

const test = async () => {
  const log = await register.createNewUser({
    nombre: "Anita",
    apellido_paterno: "lava",
    apellido_materno: null,
    email: "anita@gmail.com",
    contrasena: "21222324",
  });
  console.log('resultado del log:');
  console.log(log);
}

test();