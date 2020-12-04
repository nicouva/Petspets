const Sequelize = require('sequelize')

const sequelize = new Sequelize('mysql://root:NUcode2020!114@localhost/pets_db')

module.exports = sequelize