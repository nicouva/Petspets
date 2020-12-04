const Owner = require('./Owner.js')
const Pet = require('./Pets.js')

Owner.hasMany(Pet)
Pet.belongsTo(Owner)


module.exports = { Owner, Pet }