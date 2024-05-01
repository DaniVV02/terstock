
const sequelize = require('../dbConfig');

const { Sequelize, DataTypes } = require("sequelize");

const Film = sequelize.define("film", {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    director: {
      type: DataTypes.STRING,
      allowNull: false
    },
    release_date: {
      type: DataTypes.DATEONLY,
    },
    subject: {
      type: DataTypes.INTEGER,
    }
 });

 module.exports = Film;