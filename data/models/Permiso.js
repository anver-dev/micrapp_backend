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
        onUpdate: 'RESTRICT',
        foreignKey: 'id_nivel_acceso'
      });
      Permiso.belongsToMany(models.Rol, {
        through: "Rol_permiso",
        as: "rol",
        foreignKey: "id_permiso"
      });
    }
  }
  Permiso.init({
    id_permiso: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    permiso: DataTypes.STRING,
    descripcion: DataTypes.TEXT,
    auth: DataTypes.STRING,
    id_nivel_acceso: DataTypes.INTEGER,
    fecha_registro: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    }
  }, {
    sequelize,
    modelName: 'Permiso',
    tableName: 'permiso',
    timestamps: false
  });
  return Permiso;
};