const mongoose = require('mongoose')

const subjectSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  category: {
    type: String,
    required: true,
    enum: ['primary', 'JSS', 'SSS'],

  }
}, { timestamps: true})

const Subject = module.exports = mongoose.model('Subject', subjectSchema)