'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Localization extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Localization.init({
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    type: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Localization',
  });
  return Localization;
};