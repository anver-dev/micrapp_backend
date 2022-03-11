const nivelAccesoBusiness = require('../domain/nivelAccesoBusiness');


const getNivelAccesoById = (id) => {
  return nivelAccesoBusiness.getNivelAcceso(id);
}

module.exports = { getNivelAccesoById }