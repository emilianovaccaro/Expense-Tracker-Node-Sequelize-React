const { DataTypes } = require('sequelize');
const { sequelize } = require('../db/database');
const { Transaction } = require('./Transaction');


const User = sequelize.define('user', {
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password:{
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  google: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  }
});


User.hasMany( Transaction, {
  foreignKey: 'userId',
  sourceKey: 'id'
});

Transaction.belongsTo( User, {
  foreignKey: 'userId',
  target: 'id'
});


module.exports = {
  User
};