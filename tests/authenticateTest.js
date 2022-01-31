const auth = require('../services/userService');
const getnivel = require('../services/nivelAccesoService');
//const auth = require('../domain/userBusiness');

const test = async () => {
  const log = await auth.login({email: 'anita@gmail.com', pwd: '1234'});
  console.log(log.toJSON());
  const permiso = log.toJSON().rol.permiso;
  const nivel = await getnivel.getNivelAccesoById(permiso[0].id_nivel_acceso);
  //console.log(permiso);
  console.log(nivel.toJSON());

  /*
  Esta parte se usa cuando no se especifa en un sólo query la información que se requiere sacar
  de diferentes tablas.

  Es el equivalente a usar diferentes querys
  const rol = await log.getRol();
  const permiso = await rol.getPermiso();
  let nivel = await Nivel_acceso.findOne({where: {id_nivel_acceso: permiso[0].dataValues.id_nivel_acceso}});
  nivel = await nivel.getPermisos();

  console.log(permiso[0].dataValues.id_nivel_acceso);
  */

}

test();