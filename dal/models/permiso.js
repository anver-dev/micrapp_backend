'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class permiso extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      permiso.belongsTo(models.nivel_acceso, {
        onDelete: 'RESTRICT',
        onUpdate: 'RESTRICT'
      });
      permiso.belongsToMany(models.rol, {
        through: "rol_permiso",
        as: "rol",
        foreignKey: "id_permiso"
      });
    }
  }
  permiso.init({
    permiso: DataTypes.STRING,
    descripcion: DataTypes.STRING,
    id_usuario: DataTypes.INTEGER,
    auth: DataTypes.STRING,
    id_nivel_acceso: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'permiso',
    tableName: 'permiso',
    timestamps: false
  });
  return permiso;
};