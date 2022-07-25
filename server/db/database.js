const { Sequelize } = require('sequelize');
const keys = require('../config/keys');

const sequelize = new Sequelize(keys.PGDATABASE, keys.PGUSER, keys.PGPASSWORD, {
  host: keys.PGHOST,
  dialect: 'postgres',
});

module.exports = {
  sequelize
};