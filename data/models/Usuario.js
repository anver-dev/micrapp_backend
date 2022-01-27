'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Usuario.hasOne(models.Rol, {
        foreignKey: 'id_usuario', //Nombre de la llave foranea en la tabla Rol
        as: 'rol' //Nombre de la tabla de donde se saca la llave foranea
      });
    }
  }
  Usuario.init({
    id_usuario: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    nombre: DataTypes.STRING,
    apellido_paterno: DataTypes.STRING,
    apellido_materno: {
      allowNull: true,
      type: DataTypes.STRING
    },
    contrasena: DataTypes.STRING,
    email: DataTypes.STRING,
    llave_temporal: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Usuario',
    tableName: 'usuario',
    timestamps: false
  });
  return Usuario;
};