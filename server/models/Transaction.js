const { DataTypes } = require('sequelize');
const { sequelize } = require('../db/database');


const Transaction = sequelize.define('transaction', {
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  amount: {
    type: DataTypes.STRING,
    allowNull: false
  },
  movement: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});


module.exports = {
  Transaction
};