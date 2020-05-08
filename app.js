const express = require('express')
const mongoose = require('mongoose')

const User = require('./models/user')
const authRoute = require('./routes/auth')
const userRoute = require('./routes/user')
const tutorRoute = require('./routes/tutor')
const categoryRoute = require('./routes/category')
const subjectRoute = require('./routes/subject')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use('/', authRoute)
app.use(userRoute)
app.use(tutorRoute)
app.use(categoryRoute)
app.use(subjectRoute)

// Start server
app.listen(6030, (err) => {
  if(err) {
    throw err;
  }
  mongoose
  .connect('mongodb+srv://lawrencedash01:8130551925@cluster0-k6jzx.mongodb.net/test?retryWrites=true&w=majority', 
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true,}
  )
  .then(result => {
    console.log('server created, database connected')
  })
  .catch(err => {
    console.log(err)
  })
})