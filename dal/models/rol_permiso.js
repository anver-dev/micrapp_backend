'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class rol_permiso extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  rol_permiso.init({
    id_rol: DataTypes.INTEGER,
    id_permiso: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'rol_permiso',
    tableName: 'rol_permiso',
    timestamps: false
  });
  return rol_permiso;
};