'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Publicacion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Publicacion.belongsToMany(models.Tags,{through:"Publicacion_Tag",as:"componentes"})
    }
  }
  Publicacion.init({
    descripcion: {type: DataTypes.TEXT, allowNull:false}
  }, {
    sequelize,
    modelName: 'Publicacion',
  });
  return Publicacion;
};