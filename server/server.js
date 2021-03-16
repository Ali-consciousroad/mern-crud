const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
// Make it possible to access the .env file
require('dotenv').config()

// app
const app = express()

// db config for mongoDBAtlas
// Config we will always have to use with mongoose
mongoose
  .connect(process.env.DATABASE, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true
  })
  .then(() => console.log('DB connected'))
  // Log the error if any
  .catch(err => console.log(err));

// middlewares
app.use(cors())
app.use(morgan('dev'))
app.use(bodyParser.json())

// route
app.get('*', (req, res) => {
  res.json({
    data: 'You reached nodejs api for react node crud app test'
  })
})

// port
const port = process.env.PORT || 8000
app.listen(port, () => console.log(`Server is running on port ${port}`));
