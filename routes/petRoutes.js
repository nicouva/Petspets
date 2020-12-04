const router = require('express').Router()
const { Pet, Owner } = require('../models')

router.get('/pet', (req, res) => {
  Pet.findAll({ include: [Owner] })
    .then(pets => res.json(pets))
    .catch(err => console.log(err))
})

router.post('/pet', (req, res) => {
  Pet.create(req.body)
    .then(pet => res.json(pet))
    .catch(err => console.log(err))
})

router.put('/pets/:id', (req, res) => {
  Pet.update(req.body, { where: { id: req.params.id } })
    .then(() => res.sendStatus(200))
    .catch(err => console.log(err))
})

router.delete('/pets/:id', (req, res) => {
  Pet.destroy({ where: { id: req.params.id } })
    .then(() => res.sendStatus(200))
    .catch(err => console.log(err))
})

module.exports = router