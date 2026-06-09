"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Imagen extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Imagen.belongsTo(models.Publicacion, {
        foreignKey: "publicacionId",
        as: "publicacion",
      });
    }
  }
  Imagen.init(
    {
      pathImg: { type: DataTypes.TEXT, allowNull: true },
    },
    {
      sequelize,
      modelName: "Imagen",
      timestamps: false,
    },
  );
  return Imagen;
};
