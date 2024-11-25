'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Loan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Loan.init({
    user_id: DataTypes.INTEGER,
    book_id: DataTypes.INTEGER,
    loan_date: DataTypes.DATE,
    return_date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Loan',
  });
  return Loan;
};