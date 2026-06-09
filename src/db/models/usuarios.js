"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Usuarios extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Usuarios.hasMany(models.Publicacion, {
        foreignKey: "usuarioId",
        as: "publicaciones",
      });
      Usuarios.hasMany(models.Comentarios, {
        foreignKey: "usuarioId",
        as: "comentarios",
      });
    }
  }
  Usuarios.init(
    {
      nickName: { type: DataTypes.STRING, allowNull: false, unique: true },
      email: { type: DataTypes.STRING, allowNull: false, unique: true },
      password: { type: DataTypes.STRING, allowNull: false },
    },
    {
      sequelize,
      modelName: "Usuarios",
    },
  );
  return Usuarios;
};
