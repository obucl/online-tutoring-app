const router = require('express').Router()
const subjectCtlr = require('../controllers/subject')

router.post('/subject', subjectCtlr.createSubject)

router.get('/subject', subjectCtlr.findSubject)

router.get('/subject/:cat', subjectCtlr.findOneSubject)

module.exports = router;