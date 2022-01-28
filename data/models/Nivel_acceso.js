'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Nivel_acceso extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Nivel_acceso.hasMany(models.Permiso, {
        foreignKey: "id_nivel_acceso",
        onDelete: 'RESTRICT',
        onUpdate: 'RESTRICT'
      });
    }
  }
  Nivel_acceso.init({
    id_nivel_acceso: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    descripcion: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Nivel_acceso',
    tableName: 'nivel_acceso',
    timestamps: false
  });
  return Nivel_acceso;
};