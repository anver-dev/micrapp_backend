'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Rol_permiso extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Rol_permiso.init({
    id_rol: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    id_permiso: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  }, {
    sequelize,
    modelName: 'Rol_permiso',
    tableName: 'rol_permiso',
    timestamps: false,
    createdAt: false,
    updatedAt: false,
  });
  return Rol_permiso;
};