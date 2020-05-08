const mongoose = require('mongoose')

const categorySchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    enum: ['primary', 'JSS', 'SSS'],
    unique: true,
  }
}, { timestamps: true})

const Category = module.exports = mongoose.model('Category', categorySchema)