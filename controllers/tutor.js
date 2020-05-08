const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const Tutor = require('../models/tutor')

exports.create = (req, res, next) => {
  let firstname = req.body.firstname
  let email = req.body.email
  let password = req.body.password
  let category = req.body.category
  let subject = req.body.subject


  bcrypt.hash(password, 12)
  .then((password) => {
    let tutor = new Tutor({
      firstname,
      email,
      password,
      category,
      subject
    })
    return tutor.save()
  })
  .then(() => {
    const email = req.body.email
    jwt.sign({ email }, 'SecretTutorToken', (err, token) => {
      if(err) {
        throw err
      }
      res.status(201).json({
        token,
        message: 'Account created successfully, save your token as you might use it for other actions'
      })
    })
  })
  .catch((err) => {
    res.status(500).json({
      error: err.message
    })
  })
}

exports.findAll = (req, res, next) => {
  Tutor.find({}, (err, data) => {
    if(err) {
      res.status(500).send({
        error: err.message
      })
    }
    res.status(201).send(data)
  })
}

exports.findById = (req, res, next) => {
  let id = req.params.id
  Tutor.find({_id: id}, (err, data) => {
    if(err) {
      res.status(500).send({
        error: err.message
      })
    }
    res.status(201).send(data)
  })
}