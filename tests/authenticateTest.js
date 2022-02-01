const auth = require('../services/userService');
//const auth = require('../domain/userBusiness');

const test = async () => {
  const log = await auth.login({email: 'pamela@gmail.com'});
  console.log(log.toJSON());
  const isValid = log.authenticate('1234');

  console.log("Valor de la variable isValid: " + isValid);

  const rol = await log.getRol();
  console.log(rol.toJSON());
  const permisos = log.toJSON().rol.permiso;

  permisos.forEach((permiso) => console.log(permiso));

  /*
  Esta parte se usa cuando no se especifa en un sólo query la información que se requiere sacar
  de diferentes tablas.

  Es el equivalente a usar diferentes querys
  const permiso = await rol.getPermiso();
  let nivel = await Nivel_acceso.findOne({where: {id_nivel_acceso: permiso[0].dataValues.id_nivel_acceso}});
  nivel = await nivel.getPermisos();

  console.log(permiso[0].dataValues.id_nivel_acceso);
  */

}

test();