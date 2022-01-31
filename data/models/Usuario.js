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
    nombre: DataTypes.TEXT,
    apellido_paterno: DataTypes.TEXT,
    apellido_materno: {
      allowNull: true,
      type: DataTypes.TEXT
    },
    contrasena: DataTypes.TEXT,
    email: DataTypes.TEXT,
    id_rol: DataTypes.INTEGER,
    llave_temporal: DataTypes.TEXT,
    fecha_registro: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    }
  }, {
    sequelize,
    modelName: 'Usuario',
    tableName: 'usuario',
    timestamps: false
  });
  return Usuario;
};