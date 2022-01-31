'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Rol extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Rol.hasOne(models.Usuario, {
        foreignKey: 'id_rol', //Nombre de la llave foranea en la tabla usuario
        as: 'usuario' //Nombre de la tabla de donde se saca la llave foranea (nombre de la asociación)
      });
      Rol.belongsToMany(models.Permiso, {
        through: "Rol_permiso",
        as: "permiso",
        foreignKey: "id_rol"
      });
    }
  }
  Rol.init({
    id_rol: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    rol: DataTypes.STRING,
    descripcion: DataTypes.TEXT,
    fecha_registro: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    }
  }, {
    sequelize,
    modelName: 'Rol',
    tableName: 'rol',
    timestamps: false
  });
  return Rol;
};