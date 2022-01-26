'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Permiso extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Permiso.belongsTo(models.Nivel_acceso, {
        onDelete: 'RESTRICT',
        onUpdate: 'RESTRICT'
      });
      Permiso.belongsToMany(models.Rol, {
        through: "rol_permiso",
        as: "rol",
        foreignKey: "id_permiso"
      });
    }
  }
  Permiso.init({
    permiso: DataTypes.STRING,
    descripcion: DataTypes.STRING,
    id_usuario: DataTypes.INTEGER,
    auth: DataTypes.STRING,
    id_nivel_acceso: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Permiso',
    tableName: 'permiso',
    timestamps: false
  });
  return Permiso;
};