const router = require('express').Router()
const userCtlr = require('../controllers/user')

router.post('/user', userCtlr.createUser)

router.get('/user', userCtlr.findUser)

router.get('/user/:id', userCtlr.findUserById)

module.exports = router;