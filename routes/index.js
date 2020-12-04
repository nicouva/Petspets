const router = require('express').Router()

router.use('/api', require('./ownerRoutes'))
router.use('/api', require('./petRoutes'))

module.exports = router 