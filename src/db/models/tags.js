'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tags extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
       Tags.belongsToMany(models.Publicacion,{through:"Publicacion_Tag",as:"publicaciones"})
    }
  }
  Tags.init({
    tag: {type: DataTypes.STRING, allowNull:false, unique:true}
  }, {
    sequelize,
    modelName: 'Tags',
  });
  return Tags;
};