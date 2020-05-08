const bcrypt = require('bcryptjs')
const User = require('../models/user')

exports.createUser = (req, res, next) => {
    let firstname = req.body.firstname
    let email = req.body.email
    let password = req.body.password

  bcrypt.hash(password, 12)
    .then((password) => {
      let user = new User({
        firstname,
        email,
        password
      })
      return user.save()
    })
    .then(() => {
      res.status(201).json({
        message: 'Account created successfully'
      })
    })
    .catch((err) => {
      res.status(500).json({
        error: err.message
      })
    })
}

exports.findUser = (req, res, next) => {
  User.find({}, (err, data) => {
    if(err) {
      res.status(500).send({
        error: err.message
      })
    }
    res.status(201).send(data)
  })
}

exports.findUserById = (req, res, next) => {
  let id = req.params.id
  User.find({_id: id}, (err, data) => {
    if(err) {
      res.status(500).send({
        error: err.message
      })
    }
    res.status(201).send(data)
  })
}