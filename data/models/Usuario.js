'use strict';
const {
  Model
} = require('sequelize');
const useBcrypt = require('sequelize-bcrypt');

module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Usuario.belongsTo(models.Rol, {
        onDelete: 'RESTRICT',
        onUpdate: 'RESTRICT',
        foreignKey: 'id_rol',
        as: 'rol' //nombre de la asociación. Útil para cuando se requiere sacar datos con un sólo query, se llama a la asociación que existe entre ellos
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
    nombre: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    apellido_paterno: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    apellido_materno: DataTypes.TEXT,
    contrasena: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    email: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    id_rol: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    llave_temporal: DataTypes.TEXT,
    fecha_registro: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Usuario',
    tableName: 'usuario',
    timestamps: false
  });

  //Encriptado y validación de la contraseña
  useBcrypt(Usuario, {
    field: 'contrasena',
    rounds: 12,
    compare: 'authenticate',
  });

  return Usuario;
};