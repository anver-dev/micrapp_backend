'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class nivel_acceso extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      nivel_acceso.hasMany(models.permiso, {
        foreignKey: "id_nivel_acceso",
        onDelete: 'RESTRICT',
        onUpdate: 'RESTRICT'
      });
    }
  }
  nivel_acceso.init({
    descripcion: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'nivel_acceso',
    tableName: 'nivel_acceso',
    timestamps: false
  });
  return nivel_acceso;
};