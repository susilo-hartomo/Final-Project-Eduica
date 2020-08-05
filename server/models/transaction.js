'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Transaction.init({
    TeacherId: DataTypes.INTEGER,
    StudentId: DataTypes.INTEGER,
    paid: DataTypes.BOOLEAN,
    price: DataTypes.INTEGER,
    time: DataTypes.TIME,
    date: DataTypes.DATEONLY
  }, {
    sequelize,
    modelName: 'Transaction',
  });
  return Transaction;
};