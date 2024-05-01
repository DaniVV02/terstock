const { Sequelize , DataTypes} = require('sequelize');
require('dotenv').config({ path: '../.env' });

// Configuration de la connexion à la base de données  yes 
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  dialect: 'mysql',
});


sequelize.authenticate().then(() => {
    console.log('Connexion à la base de données établie avec succès.');
 }).catch((error) => {
    console.error('Impossible de se connecter à la base de données: ', error);
 });

module.exports = sequelize;