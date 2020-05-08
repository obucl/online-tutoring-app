const mongoose = require('mongoose')

const tutorSchema = mongoose.Schema({
  firstname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  category: {
    type: String,
    required: true,
    enum: ['primary', 'JSS', 'SSS']
  },
  subject: {
    type: String,
    required: true,
    default: undefined
  }
}, { timestamps: true})

const Tutor = module.exports = mongoose.model('Tutor', tutorSchema)