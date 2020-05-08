const router = require('express').Router()
const tutorCtlr = require('../controllers/tutor')
const authTutorKey = require('../controllers/tutor-auth')

router.post('/tutor', tutorCtlr.create)

router.get('/tutor', authTutorKey, tutorCtlr.findAll)

router.get('/tutor/:id', authTutorKey, tutorCtlr.findById)

module.exports = router;