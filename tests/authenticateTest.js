const auth = require('../services/userService');
//const auth = require('../domain/userBusiness');

const test = async () => {
  const log = await auth.login({email: 'rosa28gato@gmail.com', pwd: '1234'});
  const rol = await log.getRol();
  const permiso = await rol.getPermiso();
  console.log('resultado del log:');
  console.log(log);
  console.log('resultado del log:');
  console.log(rol);
  console.log('resultado del log:');
  console.log(permiso);

}

test();