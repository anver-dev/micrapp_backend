'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class usuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      usuario.hasMany(models.rol, {
        foreignKey: 'id_usuario', //Nombre de la llave foranea en la tabla Rol
        as: 'rol' //Nombre de la tabla de donde se saca la llave foranea
      });
    }
  }
  usuario.init({
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
    llave_temporal: DataTypes.STRING,
    id_rol: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'usuario',
    tableName: 'usuario',
    timestamps: false
  });
  return usuario;
};