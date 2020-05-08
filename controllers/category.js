const Category = require('../models/category')

exports.createCategory = (req, res, next) => {
  const category = new Category({
    name: req.body.name
  })
  category.save()
    .then(() => {
      res.status(201).json({
        message: 'Category created successfully'
      })
    })
    .catch((err) => {
      res.status(500).json({
        error: err.message
      })
    })
}

exports.findCategory = (req, res, next) => {  
  Category.find({}, (err, result) => {
    if(err) {
      res.status(500).json({
        error: err.message
      })
    }
    res.status(201).send(result)
  })
}