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
      Rol.belongsTo(models.Usuario, {
        onDelete: 'RESTRICT',
        onUpdate: 'RESTRICT',
        foreignKey: 'id_usuario'
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
    descripcion: DataTypes.STRING,
    id_usuario: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Rol',
    tableName: 'rol',
    timestamps: false
  });
  return Rol;
};