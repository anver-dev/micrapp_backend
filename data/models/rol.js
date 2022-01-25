'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class rol extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      rol.belongsTo(models.usuario, {
        onDelete: 'RESTRICT',
        onUpdate: 'RESTRICT'
      });
      rol.belongsToMany(models.permiso, {
        through: "rol_permiso",
        as: "permiso",
        foreignKey: "id_rol"
      });
    }
  }
  rol.init({
    rol: DataTypes.STRING,
    descripcion: DataTypes.STRING,
    id_usuario: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'rol',
    tableName: 'rol',
    timestamps: false
  });
  return rol;
};