const auth = require('../services/userService');
//const auth = require('../domain/userBusiness');
const { Nivel_acceso } = require('../data/models');

const test = async () => {
  const log = await auth.login({email: 'rosa28gato@gmail.com', pwd: '1234'});
  const rol = await log.getRol();
  const permiso = await rol.getPermiso();
  //const nivel = await permiso.getNivel_acceso();
  let nivel = await Nivel_acceso.findOne({where: {id_nivel_acceso: permiso[0].dataValues.id_nivel_acceso}});
  nivel = await nivel.getPermisos();
  //console.log('resultado del log:');
  //console.log(log);
  //console.log('resultado del log:');
  //console.log(rol);
  //console.log('resultado del log:');
  //console.log(permiso);
  //console.log('resultado del log:');
  //console.log(nivel);

  console.log(permiso[0].dataValues.id_nivel_acceso);

}

test();