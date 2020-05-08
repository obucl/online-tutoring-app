const Subject = require('../models/subject')

exports.createSubject = (req, res, next) => {
  const subject = new Subject({
    name: req.body.name,
    category: req.body.category
  })
  subject.save()
    .then(() => {
      res.status(201).json({
        message: 'Subject created successfully'
      })
    })
    .catch((err) => {
      res.status(500).json({
        error: err.message
      })
    })
}

exports.findSubject = (req, res, next) => {  
  Subject.find({}, (err, data) => {
    if(err) {
      res.status(500).json({
        error: err.message
      })
    }
    res.status(201).send(data)
  })
}

exports.findOneSubject = (req, res, next) => {  
  let cat = req.params.cat
  Subject.find({category: cat}, (err, data) => {
    if(err) {
      res.status(500).json({
        error: err.message
      })
    }
    res.status(201).send(data)
  })
}