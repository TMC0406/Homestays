'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Price extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    //   Price.hasMany(models.Post, {foreignKey: 'userId', as: 'Posts'})
    }
  }
  Price.init({
    name: DataTypes.STRING,
    password: DataTypes.STRING,
    phone: DataTypes.STRING,
    zalo: DataTypes.STRING,
    rules : DataTypes.STRING,
    money : DataTypes.INTEGER,
    avatar : DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Price',
  });
  return Price;
};