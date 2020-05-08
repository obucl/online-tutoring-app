const router = require('express').Router()
const categoryCtlr = require('../controllers/category')

router.post('/category', categoryCtlr.createCategory)

router.get('/category', categoryCtlr.findCategory)

module.exports = router;