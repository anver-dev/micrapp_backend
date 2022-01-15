const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DATABASETEST, process.env.USERDB, '', {
  host: process.env.HOST,
  dialect: 'mysql'
});

module.exports = { Sequelize, sequelize };