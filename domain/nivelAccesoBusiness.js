const { Nivel_acceso } = require('../data/models');

const getNivelAccesoById = (id_nivel_acceso) => {
  return Nivel_acceso.findOne({ where: { id_nivel_acceso } })
}

module.exports = { getNivelAccesoById }