"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Comentarios extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Comentarios.belongsTo(models.Usuarios, {
        foreignKey: "usuarioId",
        as: "usuario",
      });
      Comentarios.belongsTo(models.Publicacion, {
        foreignKey: "publicacionId",
        as: "publicacion",
      });
    }
  }
  Comentarios.init(
    {
      descripcion: { type: DataTypes.STRING, allowNull: false },
    },
    {
      sequelize,
      modelName: "Comentarios",
    },
  );
  return Comentarios;
};
